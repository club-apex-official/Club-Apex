import { Router } from 'express';
import { registerStudent } from '../controllers/studentController.js';
import { validate } from '../middleware/validate.js';
import { registerStudentSchema } from '../validators/studentValidator.js';

const router = Router();

router.post('/register', validate(registerStudentSchema), registerStudent);

export default router;
