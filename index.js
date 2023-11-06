const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.use((req, res, next) => {
  if (req.query.login != "javiermonge247@gmail.com") {
    res.send("No autorizado");
  }
  next();
});

app.get("/dashboard", (req, res) => {
  res.send("Dashboard Page");
});

app.get("/profile", (req, res) => {
  res.send("Profile page");
});

app.listen(3000);
console.log(`Server on port ${3000}`);
