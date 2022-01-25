'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubCategories = sequelize.define('SubCategories', {
    catId: DataTypes.INTEGER,
    scatname: DataTypes.STRING(100),
    images: DataTypes.STRING(500),
    isDeleted: DataTypes.DATE,
  }, {
    timestamps: true,
    tableName: 'sub_categories'
  });
  SubCategories.associate = function (models) {
    // associations can be defined here
  };
  return SubCategories;
};