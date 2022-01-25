'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    catname: DataTypes.STRING(100),
    images: DataTypes.STRING(500),
    isDeleted: DataTypes.DATE,
  }, {
    timestamps: true,
    tableName: 'categories'
  });
  Categories.associate = function (models) {
    // associations can be defined here
  };
  return Categories;
};