'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompanyDetail = sequelize.define('CompanyDetail', {
    userId: DataTypes.INTEGER,
    cname: DataTypes.STRING(100),
    images: DataTypes.STRING(500),
    isDeleted: DataTypes.DATE,
  }, {
    timestamps: true,
    tableName: 'companyDetail'
  });
  CompanyDetail.associate = function (models) {
    // associations can be defined here
  };
  return CompanyDetail;
};