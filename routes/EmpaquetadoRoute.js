const { Router } = require("express");
const routes = Router();

const {getEmpaquetados, postEmpaquetado,putEmpaquetado,deleteEmpaquetado,getEmpaquetadoId} = require("../controllers/EmpaquetadoController");

routes.get("/", getEmpaquetados);
routes.post("/", postEmpaquetado);
routes.put("/", putEmpaquetado);
routes.delete("/:id", deleteEmpaquetado);
routes.get("/:id", getEmpaquetadoId);

module.exports = routes;
