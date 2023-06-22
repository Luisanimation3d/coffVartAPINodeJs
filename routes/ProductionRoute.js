const { Router } = require("express");
const routes = Router();

const {getProductions, postProduction} = require("../controllers/ProductionController");

routes.get("/", getProductions);
routes.post("/", postProduction);

module.exports = routes;