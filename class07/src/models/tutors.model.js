import { DataTypes, Model } from "sequelize";
import { Pets } from "./pets.model.js";


export class Tutors extends Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {sequelize, modelName: 'Tutors'}
  )
  }

  static associate(models){
    this.hasMany(models.Pets, {foreignKey: 'tutorId', as: 'pets'});
  }
}

