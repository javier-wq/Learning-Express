const express = require("express");
const morgan = require("morgan");

const app = express();

// Settings
app.set("case sensitive routing", true);
app.set("appName", "Express Course");
app.set("port", 3000);

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.get("/Dashboard", (req, res) => {
  res.send("Dashboard Page");
});

app.get("/profile", (req, res) => {
  res.send("Profile page");
});

app.listen(app.get("port"));
console.log(`Server ${app.get("appName")} on port ${app.get("port")}`);
