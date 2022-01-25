'use strict';
module.exports = (sequelize, DataTypes) => {
  const Otp = sequelize.define('Otp', {
    phone: DataTypes.STRING(20),
    otp: DataTypes.STRING(20),
    isVerified: DataTypes.INTEGER,
    isDeleted: DataTypes.DATE,
  }, {
    timestamps: true,
    tableName: 'tbl_otp'
  });
  Otp.associate = function (models) {
    // associations can be defined here
  };
  return Otp;
};