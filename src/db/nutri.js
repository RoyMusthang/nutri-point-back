'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nutri extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  nutri.init({
    description: DataTypes.STRING,
    useMedication: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'nutri',
  });
  return nutri;
};