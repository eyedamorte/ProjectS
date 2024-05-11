import { Router } from 'express';

import authRouter from './AuthRoutes';

const baseRouter = Router();

baseRouter.use('/auth', authRouter);

export default baseRouter;
