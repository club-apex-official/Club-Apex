import cors from 'cors';
import express from 'express';
import studentRoutes from './routes/studentRoutes.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

export function createApp() {
  const app = express();
  app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
  app.use(express.json({ limit: '10kb' }));
  app.use('/api/students', studentRoutes);
  app.use(notFound);
  app.use(errorHandler);
  return app;
}
