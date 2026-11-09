import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { after, afterEach, before } from 'node:test';
import test from 'node:test';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { MongoMemoryServer } from 'mongodb-memory-server';
import request from 'supertest';

process.env.JWT_SECRET = 'test-secret-that-is-long-enough';
process.env.JWT_EXPIRES_IN = '1h';
process.env.NODE_ENV = 'test';

const { createApp } = await import('../src/app.js');
const { connectDatabase, disconnectDatabase } = await import('../src/config/db.js');
const { Student } = await import('../src/models/Student.js');
const testDirectory = path.dirname(fileURLToPath(import.meta.url));
process.env.MONGOMS_DOWNLOAD_DIR = path.join(testDirectory, '.mongodb-binaries');

let mongo;
let app;
let student;

async function createStudent() {
  return Student.create({
    fullName: 'Ada Lovelace',
    prn: 'PRN12345',
    email: 'ada@example.com',
    password: await bcrypt.hash('password123', 12),
  });
}

before(async () => {
  mongo = await MongoMemoryServer.create();
  await connectDatabase(mongo.getUri());
  app = createApp();
});

afterEach(async () => {
  await Student.deleteMany({});
  student = undefined;
});

after(async () => {
  await disconnectDatabase();
  await mongo.stop();
});

test('logs in with a valid student and sets a safe httpOnly cookie', async () => {
  await createStudent();
  const response = await request(app).post('/api/auth/login').send({ email: 'ADA@EXAMPLE.COM', password: 'password123' }).expect(200);
  assert.equal(response.body.success, true);
  assert.equal(response.body.data.student.email, 'ada@example.com');
  assert.equal('password' in response.body.data.student, false);
  assert.match(response.headers['set-cookie'][0], /HttpOnly/);
});

test('returns the same generic error for a wrong password and unknown email', async () => {
  await createStudent();
  const wrongPassword = await request(app).post('/api/auth/login').send({ email: 'ada@example.com', password: 'wrong-password' }).expect(401);
  const unknownStudent = await request(app).post('/api/auth/login').send({ email: 'unknown@example.com', password: 'password123' }).expect(401);
  assert.deepEqual(wrongPassword.body, unknownStudent.body);
});

test('rejects invalid login bodies with the standard validation response', async () => {
  const response = await request(app).post('/api/auth/login').send({ email: 'not-an-email' }).expect(400);
  assert.equal(response.body.success, false);
  assert.equal(response.body.message, 'Validation failed');
  assert.ok(response.body.errors.length > 0);
});

test('returns the current student using a valid bearer token', async () => {
  student = await createStudent();
  const token = jwt.sign({ sub: student.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  const response = await request(app).get('/api/auth/me').set('Authorization', `Bearer ${token}`).expect(200);
  assert.equal(response.body.data.student.id, student.id);
  assert.equal('password' in response.body.data.student, false);
});

test('rejects missing, malformed, and expired authentication tokens', async () => {
  student = await createStudent();
  await request(app).get('/api/auth/me').expect(401);
  await request(app).get('/api/auth/me').set('Authorization', 'Bearer not-a-token').expect(401);
  const expired = jwt.sign({ sub: student.id }, process.env.JWT_SECRET, { expiresIn: -1 });
  await request(app).get('/api/auth/me').set('Authorization', `Bearer ${expired}`).expect(401);
});

test('rejects a valid token when its student no longer exists', async () => {
  student = await createStudent();
  const token = jwt.sign({ sub: student.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  await Student.findByIdAndDelete(student.id);
  const response = await request(app).get('/api/auth/me').set('Authorization', `Bearer ${token}`).expect(401);
  assert.equal(response.body.message, 'Authentication required');
});

test('logs out idempotently by clearing the authentication cookie', async () => {
  const response = await request(app).post('/api/auth/logout').expect(200);
  assert.equal(response.body.success, true);
  assert.match(response.headers['set-cookie'][0], /club_apex_auth=/);
  await request(app).post('/api/auth/logout').expect(200);
});
