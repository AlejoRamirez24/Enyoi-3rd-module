import { DataTypes, Model } from "sequelize";


export class Hotels extends Model {
  static initial(seqInstance){
    return super.init({
      name: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.INTEGER,
      }
    },
    {sequelize: seqInstance, modelName: 'Hotels'}
  )
  }

  static associate(models){}
}

