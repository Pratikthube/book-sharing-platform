const sequelize = require("../config/database");
const User = require("./user");
const Book = require("./book");
const ExchangeRequest = require("./exchangeRequest");
const Comment = require("./comment");

// Relationships
User.hasMany(Book, { onDelete: "CASCADE" });
Book.belongsTo(User);

User.hasMany(ExchangeRequest, { foreignKey: "sender_id" });
User.hasMany(ExchangeRequest, { foreignKey: "recipient_id" });
ExchangeRequest.belongsTo(User, { foreignKey: "sender_id" });
ExchangeRequest.belongsTo(User, { foreignKey: "recipient_id" });

Book.hasMany(ExchangeRequest, { onDelete: "CASCADE" });
ExchangeRequest.belongsTo(Book);

Book.hasMany(Comment, { onDelete: "CASCADE" });
Comment.belongsTo(Book);

User.hasMany(Comment, { onDelete: "CASCADE" });
Comment.belongsTo(User);

module.exports = { sequelize, User, Book, ExchangeRequest, Comment };
