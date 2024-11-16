const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const { sequelize } = require("./models");

const allowedOrigins = [
  "http://localhost:3000",
  "https://your-frontend-domain.com",
];

dotenv.config();
const app = express();

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (e.g., mobile apps or CURL)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(new Error("Not allowed by CORS"));
      }
      return callback(null, true);
    },
    credentials: true, // If your frontend needs cookies or authorization headers
  })
);

app.use(bodyParser.json());

// Routes
app.use("/auth", require("./routes/auth"));
app.use("api/user", require("./routes/auth"));
app.use("/api/books", require("./routes/books"));
app.use("/api/exchange", require("./routes/exchangeRequest"));

// Sync DB and Start Server
const PORT = process.env.PORT || 5000;
sequelize.sync({ alter: true }).then(() => {
  console.log("Database synchronized");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
