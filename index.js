const express = require("express");
const morgan = require("morgan");

const app = express();

const HomeRoutes = require("./src/routes/home");
const UserRoutes = require("./src/routes/users");

// Settings
app.set("case sensitive routing", true);
app.set("appName", "Express Course");
app.set("port", 3000);

// Middleware
app.use(express.json());
app.use(morgan("dev"));

app.use(HomeRoutes);
app.use(UserRoutes);

app.listen(app.get("port"));
console.log(`Server ${app.get("appName")} on port ${app.get("port")}`);
