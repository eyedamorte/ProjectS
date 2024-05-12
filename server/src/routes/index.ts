import { Router } from 'express';

import authRouter from './AuthRoutes';

const baseRouter = Router();

baseRouter.use('/user', authRouter);

export default baseRouter;
