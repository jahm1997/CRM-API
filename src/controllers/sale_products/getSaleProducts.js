const { Sale_product } = require("../../db.js");

module.exports = async ({id, activityId}) => {
  if (!id && !activityId)
    throw new Error('(id) sale_product or activityId required')

  if (activityId) {
    const allSaleProducts = await Sale_product.findAll(
      {
        where:
        {
          activityId
        }
      }
    );
    return allSaleProducts;
  }

  if (id) {    
    const sale_product = await Sale_product.findByPk(id);
    return sale_product
  }

};
