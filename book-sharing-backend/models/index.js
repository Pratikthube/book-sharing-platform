const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/db");

// Import models
const User = require("./User");
const Book = require("./Book");

// Define associations
User.hasMany(Book, { foreignKey: "user_id", onDelete: "CASCADE" }); // A user can have many books
Book.belongsTo(User, { foreignKey: "user_id" }); // A book belongs to one user

// Export all models and the Sequelize instance
module.exports = {
  sequelize, // Database connection instance
  User,
  Book,
};
