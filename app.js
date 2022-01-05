const express = require("express");
const bodyParser = require("body-parser");
const dB = require("./dataBase/db");

//app  server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("server is already");
});

app.listen(3000, () => {
  console.log("server on port 3000");
});
