const { Activity, Sale_product, Product } = require("../../db.js");

module.exports = async ({ id }) => {
  const sales = await Sale_product.findAll({
    attributes: [
      ['productId', 'productId'],
      ['quantity_sale', 'quantitySale'],
      ['price_sale', 'priceSale']
    ],
    include: [
      {
        model: Activity,
        where: {
          clientId: id
        }
      },
      {
        model: Product
      }
    ]
  });

  let totalPurchased = 0
  let categories = {}
  sales.forEach(s => {
    const { quantitySale, priceSale, product } = s.dataValues
    const { category } = product
    if (categories[category])
      categories[category] += 1
    else
      categories[category] = 1

    totalPurchased += quantitySale * priceSale
  });

  const values = Object.values(categories).sort().slice(0, 1)
  const arrayCategories = Object.keys(categories).filter((c) => values.includes(categories[c]))
  categories = [...arrayCategories]

  return { totalPurchased, categories }
};
