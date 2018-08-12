'use strict';
module.exports = (sequelize, DataTypes) => {
  var Iteration = sequelize.define('Iteration', {
    iterationid: DataTypes.NUMERIC,
    status: DataTypes.TEXT
  }, {});
  Iteration.associate = function(models) {
    // associations can be defined here
  };
  return Iteration;
};