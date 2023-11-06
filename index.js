const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.set("appName", "Express Course");
app.set("port", 3000);

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

app.listen(app.get("port"));
console.log(`Server ${app.get("appName")} on port ${app.get("port")}`);
