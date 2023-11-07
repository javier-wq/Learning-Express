const express = require("express");

const app = express.Router();

app.get("/Dashboard", (req, res) => {
  res.send("Dashboard Page");
});

module.exports = app;
