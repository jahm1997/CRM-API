const { Product } = require("../../db.js");

const updateProduct = async ({
  id,
  name,
  quantity,
  enable,
  cost_price,
  sale_price,
  discount,
  category,
}) => {
  await Product.update(
    {
      name,
      quantity,
      enable,
      cost_price,
      sale_price,
      discount,
      category,
    },
    {
      where: {
        id,
      },
    }
  );
};

module.exports = updateProduct;
