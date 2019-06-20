'use strict'
module.exports = (sequelize, DataTypes) => {
  const Count = sequelize.define(
    'Count',
    {
      name: DataTypes.STRING,
      count: DataTypes.INTEGER,
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  )
  return Count
}
