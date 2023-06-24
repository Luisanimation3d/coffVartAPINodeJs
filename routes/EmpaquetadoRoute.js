const { Router } = require("express");
const routes = Router();

const {getEmpaquetados, postEmpaquetado} = require("../controllers/EmpaquetadoController");

routes.get("/", getEmpaquetados);
routes.post("/", postEmpaquetado);

module.exports = routes;