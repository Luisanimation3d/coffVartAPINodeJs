const { Router } = require("express");
const routes = Router();

const {getContracts, postContract} = require("../controllers/ContractController");

routes.get("/", getContracts);
routes.post("/", postContract);

module.exports = routes;