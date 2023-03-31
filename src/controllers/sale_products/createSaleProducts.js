const { Sale_product } = require("../../db.js");

module.exports = async ({ quantity_sale, price_sale, product_id, sale_id }) => {
  const newSaleProduct = await Sale_product.create({
    quantity_sale,
    price_sale,
    product_id,
    sale_id,
  });

  return newSaleProduct;
};
