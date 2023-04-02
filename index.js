const express = require("express");
const connection = require("./src/database");
const Place = require("./src/models/place");

const app = express();

connection.authenticate()
connection.sync({alter:true})


















app.listen(9999, () => {
  console.log("Servidor online");
});
