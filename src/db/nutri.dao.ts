import { Sequelize, DataTypes } from 'sequelize';
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    useMedication: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'clients'
  });

  return model;
};

export default makeClient;
