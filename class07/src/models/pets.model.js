import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Pets = sequelize.define('Pets', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tutor: {
    type: DataTypes.INTEGER,
    foreignKey: true,
    allowNull: false
  }
});