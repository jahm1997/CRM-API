const { Product } = require("../../db.js");

module.exports = async ({
  name,
  quantity,
  enable,
  cost_price,
  sale_price,
  discount,
  category,
}) => {
  const newProduct = await Product.create({
    name,
    quantity,
    enable,
    cost_price,
    sale_price,
    discount,
    category,
  });

  return newProduct;
};
