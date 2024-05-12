import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { User } from '@src/models/User';
import { RouteError } from '@src/other';
import { sign } from 'jsonwebtoken';
import EnvVars from '@src/constants/EnvVars';

const generateJwtToken = (id: number, email: string) => {
  return sign({ id, email }, EnvVars.Jwt.Secret, { expiresIn: '24h' });
};

export const authController = () => {
  const registration = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, name } = req.body;

    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      return next(RouteError.badRequest('User is already registered'));
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, password: hashPassword, name: name });
    const token = generateJwtToken(user.id, email);
    return res.json({ token });
  };

  const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return next(RouteError.badRequest('Such user does not exist'));
    }

    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(RouteError.badRequest('Wrong password'));
    }

    const token = generateJwtToken(user.id, user.email);
    return res.json({ token });
  };

  const check = async (req: Request, res: Response) => {
    const token = generateJwtToken(res.locals.user.id, res.locals.user.email);
    return res.json({ token });
  };

  return {
    registration,
    login,
    check,
  };
};
