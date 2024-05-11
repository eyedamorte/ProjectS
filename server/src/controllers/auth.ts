import { Request, Response } from 'express';

export const authController = () => {
  const registration = async (req: Request, res: Response) => {};

  const login = async (req: Request, res: Response) => {};

  const auth = async (req: Request, res: Response) => {
    return res.json({ message: 'привет' });
  };

  return {
    registration,
    login,
    auth,
  };
};
