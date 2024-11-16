const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ExchangeRequest = sequelize.define("ExchangeRequest", {
  status: { type: DataTypes.STRING, defaultValue: "pending" },
  terms: { type: DataTypes.TEXT },
});

module.exports = ExchangeRequest;
