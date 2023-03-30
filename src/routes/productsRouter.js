const { Router } = require("express");
const {
  getProducts,
  postProduct,
  putProduct,
  deleteProduct,
} = require("../handlers/productsHandler");

const productsRouter = Router();

productsRouter.get("/products", getProducts);
productsRouter.post("/products", postProduct);
productsRouter.put("/products", putProduct);
productsRouter.delete("/products", deleteProduct);

module.exports = productsRouter;
