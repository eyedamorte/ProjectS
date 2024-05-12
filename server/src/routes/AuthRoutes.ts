import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { Router } from 'express';

import { authController } from '@src/controllers';
import jetValidator from 'jet-validator';
import { authMiddleware } from './middleware/authMiddleware';

const { check, registration, login } = authController();

const router = Router();

const validate = jetValidator();

router.post('/registration', validate('email', 'password', 'name'), registration);
router.post('/login', validate('email', 'password'), login);
router.get('/auth', authMiddleware, check);

export default router;
