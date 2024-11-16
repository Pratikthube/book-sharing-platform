const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Book = sequelize.define("Book", {
  title: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  genre: { type: DataTypes.STRING },
  condition: { type: DataTypes.STRING },
  availability: { type: DataTypes.BOOLEAN, defaultValue: true },
});

module.exports = Book;
