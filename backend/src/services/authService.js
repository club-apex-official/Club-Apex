import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { authConfig } from '../config/auth.js';
import { Student } from '../models/Student.js';

const dummyPasswordHash = '$2a$12$zU1Sh0tqcsW0fizG7PAQ7eFE3SIfTaKH1S3iE1IbuDdz3ahm2xR5K';

export async function authenticateStudent({ email, password }) {
  const student = await Student.findOne({ email }).select('+password');
  const passwordMatches = await bcrypt.compare(password, student?.password || dummyPasswordHash);
  if (!student || !passwordMatches) {
    return null;
  }
  return student;
}

export function createToken(student) {
  return jwt.sign({ sub: student.id }, process.env.JWT_SECRET, { expiresIn: authConfig.expiresIn });
}

export function studentDto(student) {
  return {
    id: student.id,
    fullName: student.fullName,
    prn: student.prn,
    email: student.email,
    createdAt: student.createdAt,
  };
}
