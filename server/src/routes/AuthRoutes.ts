import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { Router } from 'express';

import { authController } from '@src/controllers';

const { auth, registration, login } = authController();

const router = Router();

router.post('/registration', registration);
router.post('/login', login);
router.get('/', auth);

export default router;
