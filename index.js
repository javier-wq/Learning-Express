const express = require("express");

const app = express();

app.all("/info", (req, res) => {
  res.send("Server info");
});

app.get("/search", (req, res) => {
  if (req.query.q != "js") {
    res.send("Pagina Normal");
  }
  res.send("Lista de libros de javascript");
});

app.get("/hello/:user", (req, res) => {
  console.log(req.query.x);
  res.send(`Hello ${req.params.user}`);
});

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  res.send(`Result: ${parseInt(x) + parseInt(y)}`);
});

app.get("/user/:username/photo", (req, res) => {
  if (req.params.username === "jax") {
    return res.sendFile("./js.png", {
      root: __dirname,
    });
  }

  res.send("El usuario no tiene permisos");
});

app.get("/name/:nombre/age/:age", (req, res) => {
  res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} años`);
});

app.listen(3000);
console.log(`Server on port ${3000}`);
