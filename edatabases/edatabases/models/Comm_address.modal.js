'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comm_address = sequelize.define('Comm_address', {
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING(100),
    street: DataTypes.STRING(100),
    locality: DataTypes.STRING(100),
    landmark: DataTypes.STRING(100),
    city: DataTypes.STRING(100),
    state: DataTypes.STRING(100),
    pincode: DataTypes.STRING(100),
    pincode: DataTypes.STRING(100),
    country: DataTypes.STRING(500),
    isDeleted: DataTypes.DATE,
  }, {
    timestamps: true,
    tableName: 'comm_address'
  });
  Comm_address.associate = function (models) {
    // associations can be defined here
  };
  return Comm_address;
};