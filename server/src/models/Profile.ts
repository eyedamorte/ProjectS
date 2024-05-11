import moment from 'moment';

import { sequelize } from '@src/services/Database';
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Optional,
} from 'sequelize';

// **** Types **** //

export type ProfileAttributes = {
  id: number;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type ProfileCreationAttributes = Optional<ProfileAttributes, 'id'>;

export class Profile extends Model<InferAttributes<Profile>, InferCreationAttributes<Profile>> {
  declare id: CreationOptional<number>;
  declare description: string;
  declare createdAt: string;
  declare updatedAt: string;
}

// **** Functions **** //
Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'profiles',
    sequelize,
  },
);
