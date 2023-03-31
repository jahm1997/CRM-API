const { Sale_product } = require("../../db.js");

module.exports = async () => {
  const allSaleProducts = await Sale_product.findAll();
  return allSaleProducts;
};
