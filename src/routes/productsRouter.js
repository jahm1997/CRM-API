const { Router } = require("express");
const {
  getProducts,
  postProduct,
  putProduct,
} = require("../handlers/productsHandler");

const productsRouter = Router();

productsRouter.get("/product", getProducts);
productsRouter.post("/product", postProduct);
productsRouter.put("/product", putProduct);

module.exports = productsRouter;
