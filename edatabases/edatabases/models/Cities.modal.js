'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cities = sequelize.define('Cities', {
    stateId: DataTypes.INTEGER,
    name: DataTypes.STRING(20),
    isDeleted: DataTypes.DATE,
  }, {
    timestamps: true,
    tableName: 'tbl_cities'
  });
  Cities.associate = function (models) {
    // associations can be defined here
  };
  return Cities;
};