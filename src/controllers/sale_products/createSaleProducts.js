const { Sale_product } = require("../../db.js");

module.exports = async (data) => {
  //data={ quantity_sale, price_sale, productId, activityId }
  if (data['activityId'] && data['productId']) {
    const newSaleProduct = await Sale_product.create(data);
    return newSaleProduct;
  } else {
    throw new Error("activityId and productId required")
  }
};
