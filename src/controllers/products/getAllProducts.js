const { where } = require("sequelize");
const { Product } = require("../../db.js");

module.exports = async ({ bossId }) => {
  if (!bossId) throw new Error("bossId required");

  const products = await Product.findAll({ where: { bossId } });

  const allProducts = products.map((b) => {
    const product = { ...b.dataValues };
    let discount = (product.sale_price * product.discount) / 100;
    product.withDiscount = product.sale_price - discount;
    return product;
  });
  return allProducts;
};
