require('dotenv').config()
const express = require("express");

const connection = require("./src/database");

const validateNewUser = require('./src/middlewares/validate-new-user')
const validateToken = require("./src/middlewares/validate-token");

const createPlace = require("./src/controllers/places/createPlace");
const findPlaces = require("./src/controllers/places/findPlaces");
const deletePlace = require("./src/controllers/places/deletePlace");
const updatePlace = require("./src/controllers/places/updatePlace");

const createLogin = require("./src/controllers/users/createLogin");
const createUser = require("./src/controllers/users/createUser");

const app = express();
app.use(express.json());

connection.authenticate();
connection.sync({ alter: true });

app.post("/places", validateToken, createPlace);
app.get("/places", validateToken, findPlaces);
app.delete("/places/:id", validateToken, deletePlace);
app.put("/places/:id", validateToken, updatePlace);

app.post("/users", validateNewUser, createUser);
app.post("/users/login", createLogin);

app.listen(9999, () => {
  console.log("Servidor online");
});
