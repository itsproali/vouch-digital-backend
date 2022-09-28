const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to MVC Pattern Server..!");
});

// Not Found Route
app.get("*", (req, res) => {
  res.send(404).send({ message: "Route Not Found" });
});

// Handle Catch Error
app.use(errorHandler);

module.exports = app;
