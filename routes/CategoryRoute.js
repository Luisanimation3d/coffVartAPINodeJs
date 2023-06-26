const { Router } = require("express");
const routes = Router();

const {getCategoria, getCategoryId, postCategory, putCategory, deleteCategory} = require("../controllers/CategoryController");

routes.get('/', getCategoria);
routes.get("/:id", getCategoryId);
routes.post("/", postCategory);
routes.put('/', putCategory);
routes.delete('/:id', deleteCategory);

module.exports = routes;