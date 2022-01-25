'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    await queryInterface.createTable('comm_address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(100),
        defaultValue: null
      },
      street: {
        type: Sequelize.STRING(100),
        defaultValue: null
      },
      locality: {
        type: Sequelize.STRING(100),
        defaultValue: null
      },
      landmark: {
        type: Sequelize.STRING(100),
        defaultValue: null
      },
      city: {
        type: Sequelize.STRING(100),
        defaultValue: null
      },
      state: {
        type: Sequelize.STRING(100),
        defaultValue: null
      },
      pincode: {
        type: Sequelize.STRING(20),
        defaultValue: null
      },
      country: {
        type: Sequelize.STRING(100),
        defaultValue: null
      },
      isDeleted: {
        type: Sequelize.DATE,
        defaultValue: null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
   await queryInterface.dropTable('comm_address');
  }
};
