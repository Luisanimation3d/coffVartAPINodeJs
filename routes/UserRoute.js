const { Router } = require("express");
const routes = Router();

const {getUsers, postUser} = require("../controllers/UserController");

routes.get("/", getUsers);
routes.post("/", postUser);

module.exports = routes;