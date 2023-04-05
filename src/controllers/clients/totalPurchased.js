const { Activity, Sale_product, Client } = require("../../db.js");

module.exports = async ({ id }) => {
  const sales = await Sale_product.findAll({
    attributes: [
      ['quantity_sale', 'quantitySale'],
      ['price_sale', 'priceSale']
    ],
    include: {
      model: Activity,
      where: {
        clientId: id
      }
    }
  });
  let totalPurchased=0
  sales.forEach(s => {
    const {quantitySale,priceSale}=s.dataValues
    totalPurchased+=quantitySale*priceSale
  });
  
  return totalPurchased
};
