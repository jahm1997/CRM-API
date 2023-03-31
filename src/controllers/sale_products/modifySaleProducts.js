const { Sale_product } = require("../../db.js");

const updateSaleProduct = async ({ id, quantity_sale, price_sale }) => {
  await Sale_product.update(
    {
      quantity_sale,
      price_sale,
    },
    {
      where: {
        id,
      },
    }
  );
};

module.exports = updateSaleProduct;
