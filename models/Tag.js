// Important parts of sequelize library imported
const { Model, DataTypes } = require('sequelize');
// Database connection from config.js imported
const sequelize = require('../config/connection.js');
// Tag model (table) initialized by extending off Sequelize's Model class
class Tag extends Model {}

// Attributes of the tag model set per the user story
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
