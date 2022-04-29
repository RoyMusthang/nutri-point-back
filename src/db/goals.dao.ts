import { Sequelize, DataTypes } from 'sequelize';

const makeGoals = (sequelize: Sequelize) => {
  const model = sequelize.define('goals', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    goals: {
      type: DataTypes.STRING
    },
    idCreate: {
      type: DataTypes.UUID
    }
  }, {
    timestamps: false,
    tableName: 'goals'
  });
  return model;
};

export default makeGoals;
