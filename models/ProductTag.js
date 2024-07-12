// Important parts of sequelize library imported
const { Model, DataTypes } = require('sequelize');
// Database connection from config.js imported
const sequelize = require('../config/connection');
// ProductTag model (table) initialized by extending off Sequelize's Model class
class ProductTag extends Model {}

// Attributes of the ProductTag model set per the user story
// Note this model facilitates a many-to-many relationship 
// with the product and tag models.
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
