import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Rooms = sequelize.define({
  number:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  capacity:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  isActive:{
    type:DataTypes.BOOLEAN,
    allowNull:false
  }
})