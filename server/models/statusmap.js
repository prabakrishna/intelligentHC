'use strict';
module.exports = (sequelize, DataTypes) => {
  var StatusMap = sequelize.define('StatusMap', {
    statuscode: DataTypes.NUMERIC,
    status: DataTypes.TEXT
  }, {});
  StatusMap.associate = function(models) {
    // associations can be defined here
  };
  return StatusMap;
};