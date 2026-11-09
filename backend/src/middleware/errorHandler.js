import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

export function notFound(req, res) {
  return res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.originalUrl}` });
}

export function errorHandler(error, _req, res, _next) {
  if (error instanceof SyntaxError && 'body' in error) {
    return res.status(400).json({ success: false, message: 'Invalid JSON body' });
  }

  if (error instanceof jwt.TokenExpiredError) {
    return res.status(401).json({ success: false, message: 'Authentication token has expired' });
  }

  if (error instanceof jwt.JsonWebTokenError) {
    return res.status(401).json({ success: false, message: 'Invalid authentication token' });
  }

  if (error instanceof mongoose.Error.CastError) {
    return res.status(400).json({ success: false, message: 'Invalid request data' });
  }

  if (error instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({ success: false, message: 'Validation failed' });
  }

  return res.status(500).json({ success: false, message: 'Internal server error' });
}
