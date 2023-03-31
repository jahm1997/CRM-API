const { Router } = require("express");
const {
  getSaleProducts,
  postSaleProduct,
  putSaleProduct,
} = require("../handlers/sale_productsHandler");

const sale_productsRouter = Router();

sale_productsRouter.get("/sale_product", getSaleProducts);
sale_productsRouter.post("/sale_product", postSaleProduct);
sale_productsRouter.put("/sale_product", putSaleProduct);

module.exports = sale_productsRouter;
