const { Router } = require("express");
const routes = Router();

const {getPays, postPay} = require("../controllers/PayController");

routes.get("/", getPays);
routes.post("/", postPay);

module.exports = routes;