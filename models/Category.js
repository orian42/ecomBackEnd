// Important parts of sequelize library imported
const { Model, DataTypes } = require('sequelize');
// Database connection from config.js imported
const sequelize = require('../config/connection.js');
// Category model (table) initialized by extending off Sequelize's Model class
class Category extends Model {}

// Attributes of the category model set per the user story
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
