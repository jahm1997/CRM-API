const { Router } = require("express");
const {
  getSaleProducts,
  postSaleProduct,
  putSaleProduct,
  deleteSaleProduct,
} = require("../handlers/sale_productsHandler");

const sale_productsRouter = Router();

sale_productsRouter.get("/sale_products", getSaleProducts);
sale_productsRouter.post("/sale_product", postSaleProduct);
sale_productsRouter.put("/sale_product", putSaleProduct);
sale_productsRouter.delete("/sale_product", deleteSaleProduct);

module.exports = sale_productsRouter;
