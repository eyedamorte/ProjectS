import { NextFunction, Request, Response } from 'express';
import { RouteError } from '@src/other';
import { verify } from 'jsonwebtoken';
import EnvVars from '@src/constants/EnvVars';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers?.authorization?.split(' ')[1];
    if (!token) {
      return next(RouteError.unauthorized('Unauthorized'));
    }

    const decoded = verify(token, EnvVars.Jwt.Secret);
    res.locals = { user: decoded };
    next();
  } catch (e) {
    return next(RouteError.unauthorized('Unauthorized'));
  }
};
