const express = require("express");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/user.route");
const clientRoute = require("./routes/client.route");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/user", userRoute);
app.use("/client", clientRoute);

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to Vouch Digital Server..!");
});

// Not Found Route
app.get("*", (req, res) => {
  res.send(404).send({ message: "Route Not Found" });
});

module.exports = app;
