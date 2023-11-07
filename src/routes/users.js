const express = require("express");

const app = express.Router();

app.get("/profile", (req, res) => {
  res.send("Profile page");
});

module.exports = app;
