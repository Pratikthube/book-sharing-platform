const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectDB } = require("./config/db");
const { sequelize } = require("./config/db");
const { User, Book } = require("./models/index");

require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to the database
connectDB();

// Sync models
sequelize.sync({ alter: true }).then(() => console.log("Database synced."));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/books", require("./routes/books"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
