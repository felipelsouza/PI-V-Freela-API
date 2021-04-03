const { Model, DataTypes } = require('sequelize');

class Employer extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        cellphone: DataTypes.STRING,
        company: DataTypes.STRING,
        role: DataTypes.STRING,
      },
      {
        underscored: true,
        sequelize,
      }
    );
  }
}

module.exports = Employer;