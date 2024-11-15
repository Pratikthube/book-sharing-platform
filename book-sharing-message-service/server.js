const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const messagesRoutes = require("./routes/messages");
const commentsRoutes = require("./routes/comments");

require("dotenv").config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/messages", messagesRoutes);
app.use("/api/comments", commentsRoutes);
// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Messages service running on port ${PORT}`));
