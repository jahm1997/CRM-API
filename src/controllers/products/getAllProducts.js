const { Product } = require("../../db.js");

module.exports = async () => {
  const allProducts = await Product.findAll();
  return allProducts;
};
