import { Sequelize, DataTypes } from 'sequelize';
import { goalsDAO } from '.'
/* eslint-disable */
const { v4: uuidv4 } = require('uuid');

const makeClient = (sequelize: Sequelize) => {
  const model = sequelize.define('clients', {
    id: {
      defaultValue: () => uuidv4(),
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    useMedication: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'clients'
  });

  goalsDAO.belongsTo(model, { foreignKey: 'id', as: 'id' });

  model.hasMany(goalsDAO, { foreignKey: 'idCreate', as: 'idCreate' });
  return model;
};

export default makeClient;
