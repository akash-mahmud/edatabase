'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    catId: DataTypes.INTEGER,
    subcatId: DataTypes.INTEGER,
    fname: DataTypes.STRING(100),
    lname: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    password: DataTypes.STRING(255),
    phone: DataTypes.STRING(15),
    gender: DataTypes.STRING(200),
    dob: DataTypes.STRING(20),
    graduation: DataTypes.STRING(100),
    master: DataTypes.STRING(100),
    designation: DataTypes.STRING(100),
    religion: DataTypes.STRING(100),
    language: DataTypes.STRING(200),
    photos: DataTypes.STRING(500),
    address: DataTypes.STRING(100),
    street: DataTypes.STRING(100),
    locality: DataTypes.STRING(100),
    landmark: DataTypes.STRING(100),
    city: DataTypes.STRING(100),
    state: DataTypes.STRING(100),
    pincode: DataTypes.STRING(100),
    country: DataTypes.STRING(100),
    isVerified:DataTypes.INTEGER,
    isDeleted: DataTypes.DATE,
  }, {
    timestamps: true,
    tableName: 'users'
  });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};