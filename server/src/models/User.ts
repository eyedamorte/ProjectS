import moment from 'moment';

import { sequelize } from '@src/services/Database';
import {
  CreationOptional,
  DataTypes,
  HasOneGetAssociationMixin,
  HasOneCreateAssociationMixin,
  HasOneSetAssociationMixin,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Optional,
} from 'sequelize';

import { Profile } from './Profile';

// **** Variables **** //

export enum UserRoles {
  Standard,
  Admin,
}

// **** Types **** //

export type UserAttributes = {
  id: number;
  name: string;
  email: string;
  role: UserRoles;
  createdAt: string;
  updatedAt: string;
};

export type UserCreationAttributes = Optional<UserAttributes, 'id'>;

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare email: string;
  declare role: UserRoles;
  declare createdAt: string;
  declare updatedAt: string;

  declare getProfile: HasOneGetAssociationMixin<Profile>;
  declare createProfile: HasOneCreateAssociationMixin<Profile>;
  declare setProfile: HasOneSetAssociationMixin<Profile, number>;
}

// **** Functions **** //
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    role: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'users',
    sequelize,
  },
);

User.hasOne(Profile, { sourceKey: 'id' });
