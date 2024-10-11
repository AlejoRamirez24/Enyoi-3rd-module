import { DataTypes, Model } from "sequelize";


export class Rooms extends Model {
  static initial (sequelize) {
    return super.init({
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      hotelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
  {sequelize, modelName: 'Rooms'})
  }

  static associate(models){
    this.belongsTo( models.Hotels, { foreignKey: 'hotelId', as: 'Hotel'})
    this.belongsTo( models.RoomTypes, { foreignKey: 'typeId', as: 'type'})
  }
}