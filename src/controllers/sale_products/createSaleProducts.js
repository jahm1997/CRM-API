const { Sale_product } = require("../../db.js");

module.exports = async ({ quantity_sale, price_sale, productId, activityId }) => {
  const newSaleProduct = await Sale_product.create({
    quantity_sale,
    price_sale,
    productId,
    activityId,
  });

  return newSaleProduct;
};
