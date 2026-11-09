import { authConfig, cookieOptions } from '../config/auth.js';
import { authenticateStudent, createToken, studentDto } from '../services/authService.js';

export async function login(req, res, next) {
  try {
    const student = await authenticateStudent(req.body);
    if (!student) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = createToken(student);
    return res.status(200).cookie(authConfig.cookieName, token, {
      ...cookieOptions(),
      maxAge: authConfig.cookieMaxAge,
    }).json({
      success: true,
      message: 'Login successful',
      data: { student: studentDto(student) },
    });
  } catch (error) {
    return next(error);
  }
}

export function logout(_req, res) {
  return res.status(200).clearCookie(authConfig.cookieName, cookieOptions()).json({
    success: true,
    message: 'Logout successful',
  });
}

export function me(req, res) {
  return res.status(200).json({
    success: true,
    message: 'Current student retrieved successfully',
    data: { student: studentDto(req.user) },
  });
}
