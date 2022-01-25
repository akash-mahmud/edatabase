'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectDetail = sequelize.define('ProjectDetail', {
    userId: DataTypes.INTEGER,
    compId: DataTypes.INTEGER,
    projname: DataTypes.STRING(100),
    images: DataTypes.STRING(500),
    isDeleted: DataTypes.DATE,
  }, {
    timestamps: true,
    tableName: 'projectDetail'
  });
  ProjectDetail.associate = function (models) {
    // associations can be defined here
  };
  return ProjectDetail;
};