import { Sequelize } from 'sequelize';
import EnvVars from '@src/constants/EnvVars';

export const sequelize = new Sequelize(
  EnvVars.Database.name,
  EnvVars.Database.user,
  EnvVars.Database.password,
  { dialect: 'postgres', host: EnvVars.Database.host, port: Number(EnvVars.Database.port) },
);
