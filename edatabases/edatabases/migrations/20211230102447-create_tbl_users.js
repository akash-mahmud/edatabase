'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      catId: {
        type: Sequelize.INTEGER,
        defaultValue: null
      },
      subcatId: {
        type: Sequelize.INTEGER,
        defaultValue: null
      },
      fname: {
        type: Sequelize.STRING(100),
        defaultValue: null
      },
      lname: {
        type: Sequelize.STRING(100),
        defaultValue: null
      },
      email: {
        type: Sequelize.STRING(100),
        defaultValue: null,
      },
      password: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      phone: {
        type: Sequelize.STRING(20),
        defaultValue: null
      },
      gender: {
        type: Sequelize.STRING(100),
        defaultValue: null
      },
      dob: {
        type: Sequelize.STRING(15),
        defaultValue: null
      },
      graduation: {
        type: Sequelize.STRING(100),
        defaultValue: null
      },
      master: {
        type: Sequelize.STRING(100),
        defaultValue: null
      },
      designation: {
        type: Sequelize.STRING(100),
        defaultValue: null
      },
      religion: {
        type: Sequelize.STRING(100),
        defaultValue: null
      },
      language: {
        type: Sequelize.STRING(100),
        defaultValue: null
      },
      photos: {
        type: Sequelize.STRING(500),
        defaultValue: null
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
      isVerified: {
        type: Sequelize.INTEGER,
        defaultValue: 0
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
    await queryInterface.dropTable('users');
  }
};
