'use strict';
module.exports = (sequelize, DataTypes) => {
  const States = sequelize.define('States', {
    countryId: DataTypes.INTEGER,
    name: DataTypes.STRING(20),
    isDeleted: DataTypes.DATE,
  }, {
    timestamps: true,
    tableName: 'tbl_states'
  });
  States.associate = function (models) {
    // associations can be defined here
  };
  return States;
};