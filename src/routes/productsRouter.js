const { Router } = require("express");
const {
  getProducts,
  postProduct,
  putProduct,
} = require("../handlers/productsHandler");

const productsRouter = Router();

productsRouter.get("/products", getProducts);
productsRouter.post("/products", postProduct);
productsRouter.put("/products", putProduct);

module.exports = productsRouter;
