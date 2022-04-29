'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('goals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      goals: {
        type: Sequelize.STRING
      },
      idCreate: {
        type: Sequelize.UUID,
        references: {
          model: 'clients',
          key: 'id'
        }
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('goals');
  }
};
