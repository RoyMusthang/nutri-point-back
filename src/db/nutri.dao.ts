import { Sequelize, DataTypes } from 'sequelize';

const makeClient = (sequelize: Sequelize) => {
  const model = sequelize.define('clients', {
    id: {
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    useMedication: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE(3)
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE(3)
    }
  }, {
    timestamps: false,
    tableName: 'clients'
  });

  return model;
};

export default makeClient;
