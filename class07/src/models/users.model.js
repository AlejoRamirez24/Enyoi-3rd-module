import { sequelize } from '../config/db.js';
import { DataTypes } from 'sequelize';

export const Users = sequelize.define('Users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});