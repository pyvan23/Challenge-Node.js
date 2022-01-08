
const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./api/conection");
require("./dataBase/db");
require("dotenv").config

//app  server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Walt Disney World");
});

app.listen(process.env.PORT, () => {
  console.log("server yet");
});
