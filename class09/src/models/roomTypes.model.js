import { DataTypes, Model } from "sequelize";


export class RoomTypes extends Model {
  static init (sequelize){
    return super.init ({
      name:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      capacity:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      beds: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {sequelize, modelName:'RoomTypes'} )
  }

  static associate (models){
    this.hasMany( models.Rooms, { foreignKey: 'typeId', as: 'type'})
  }
}