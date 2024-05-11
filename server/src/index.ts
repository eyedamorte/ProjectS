import './pre-start'; // Must be the first import
import logger from 'jet-logger';

import EnvVars from '@src/constants/EnvVars';
import server from './server';

import { sequelize } from '@src/services';

// **** Run **** //

const SERVER_START_MSG = 'Express server started on port: ' + EnvVars.Port.toString();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    server.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG));
  } catch {}
};

start();
