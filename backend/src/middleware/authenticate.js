import jwt from 'jsonwebtoken';
import { authConfig } from '../config/auth.js';
import { Student } from '../models/Student.js';

function tokenFromRequest(req) {
  const authorization = req.get('authorization');
  if (authorization?.startsWith('Bearer ')) {
    return authorization.slice(7);
  }
  return req.cookies?.[authConfig.cookieName];
}

export async function authenticate(req, res, next) {
  const token = tokenFromRequest(req);
  if (!token) {
    return res.status(401).json({ success: false, message: 'Authentication required' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const student = await Student.findById(payload.sub);
    if (!student) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }

    req.user = student;
    return next();
  } catch (error) {
    return next(error);
  }
}
