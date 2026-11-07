import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { after, afterEach, before } from 'node:test';
import test from 'node:test';
import bcrypt from 'bcryptjs';
import { MongoMemoryServer } from 'mongodb-memory-server';
import request from 'supertest';
import { createApp } from '../src/app.js';
import { connectDatabase, disconnectDatabase } from '../src/config/db.js';
import { Student } from '../src/models/Student.js';

const testDirectory = path.dirname(fileURLToPath(import.meta.url));
process.env.MONGOMS_DOWNLOAD_DIR = path.join(testDirectory, '.mongodb-binaries');

let mongo;
let app;

const validStudent = {
  fullName: 'Ada Lovelace',
  prn: 'PRN12345',
  email: 'ada@example.com',
  password: 'password123',
};

before(async () => {
  mongo = await MongoMemoryServer.create();
  await connectDatabase(mongo.getUri());
  app = createApp();
});

afterEach(async () => {
  await Student.deleteMany({});
});

after(async () => {
  await disconnectDatabase();
  await mongo.stop();
});

test('registers a valid student without exposing password', async () => {
  const response = await request(app).post('/api/students/register').send(validStudent).expect(201);
  assert.equal(response.body.success, true);
  assert.equal(response.body.data.prn, 'PRN12345');
  assert.equal(response.body.data.email, 'ada@example.com');
  assert.equal('password' in response.body.data, false);
});

test('stores a bcrypt password hash', async () => {
  await request(app).post('/api/students/register').send(validStudent).expect(201);
  const student = await Student.findOne({ prn: validStudent.prn }).select('+password');
  assert.notEqual(student.password, validStudent.password);
  assert.match(student.password, /^\$2/);
  assert.equal(await bcrypt.compare(validStudent.password, student.password), true);
});

test('rejects a duplicate PRN', async () => {
  await request(app).post('/api/students/register').send(validStudent).expect(201);
  const response = await request(app).post('/api/students/register').send({ ...validStudent, email: 'second@example.com' }).expect(409);
  assert.match(response.body.message, /PRN/);
});

test('rejects a duplicate email regardless of casing', async () => {
  await request(app).post('/api/students/register').send(validStudent).expect(201);
  const response = await request(app).post('/api/students/register').send({ ...validStudent, prn: 'PRN54321', email: 'ADA@EXAMPLE.COM' }).expect(409);
  assert.match(response.body.message, /email/);
});

test('rejects invalid registration payloads', async (t) => {
  const cases = [
    { fullName: 'Ada' },
    { ...validStudent, email: 'not-an-email' },
    { ...validStudent, password: 'short1' },
    { ...validStudent, password: 'allletters' },
    { ...validStudent, prn: 'bad-prn!' },
    { ...validStudent, extra: true },
  ];
  for (const payload of cases) {
    await t.test(JSON.stringify(payload), async () => {
      const response = await request(app).post('/api/students/register').send(payload).expect(400);
      assert.equal(response.body.message, 'Validation failed');
      assert.ok(response.body.errors.length > 0);
    });
  }
});

test('rejects malformed JSON', async () => {
  const response = await request(app)
    .post('/api/students/register')
    .set('Content-Type', 'application/json')
    .send('{"fullName":')
    .expect(400);
  assert.equal(response.body.message, 'Invalid JSON body');
});
