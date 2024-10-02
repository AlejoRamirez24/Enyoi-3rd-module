import { DataTypes, Model } from "sequelize";

export class Pets extends Model {
  static init(sequelize) {
    return super.init({
      name: { type: DataTypes.STRING, allowNull: false },
      age: { type: DataTypes.INTEGER, allowNull: false },
      breed: { type: DataTypes.STRING, allowNull: false },
      color: { type: DataTypes.STRING, allowNull: false },
      tutorId: { type: DataTypes.INTEGER, allowNull: false }
    }, { sequelize, modelName: 'Pets' });
  }

  static associate(models) {
    // Asegúrate de que el alias para la relación es único
    this.belongsTo(models.Tutors, { foreignKey: 'tutorId', as: 'tutorData' });
  }
}
