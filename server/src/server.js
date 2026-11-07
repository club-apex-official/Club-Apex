import 'dotenv/config';
import { createApp } from './app.js';
import { connectDatabase } from './config/db.js';

const port = Number(process.env.PORT) || 5000;

async function start() {
  await connectDatabase(process.env.MONGODB_URI);
  createApp().listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

start().catch((error) => {
  console.error('Failed to start server:', error.message);
  process.exit(1);
});
