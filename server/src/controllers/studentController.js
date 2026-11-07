import bcrypt from 'bcryptjs';
import { Student } from '../models/Student.js';

function conflictResponse(res, field) {
  const label = field === 'email' ? 'email' : 'PRN';
  return res.status(409).json({
    success: false,
    message: `A student with this ${label} already exists`,
  });
}

export async function registerStudent(req, res, next) {
  const { fullName, prn, email, password } = req.body;

  try {
    const existingStudent = await Student.findOne({ $or: [{ prn }, { email }] }).select('+prn +email');
    if (existingStudent) {
      return conflictResponse(res, existingStudent.prn === prn ? 'prn' : 'email');
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const student = await Student.create({ fullName, prn, email, password: passwordHash });

    return res.status(201).json({
      success: true,
      message: 'Student registered successfully',
      data: {
        id: student.id,
        fullName: student.fullName,
        prn: student.prn,
        email: student.email,
        createdAt: student.createdAt,
      },
    });
  } catch (error) {
    if (error?.code === 11000) {
      return conflictResponse(res, error.keyPattern?.email ? 'email' : 'prn');
    }
    return next(error);
  }
}
