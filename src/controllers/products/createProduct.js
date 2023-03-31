const { Product } = require("../../db.js");

module.exports = async ({
  name,
  quantity,
  enable,
  cost_price,
  sale_price,
  discount,
  category,
  bossId,
}) => {
  const newProduct = await Product.create({
    name,
    quantity,
    enable,
    cost_price,
    sale_price,
    discount,
    category,
    bossId,
  });

  return newProduct;
};
