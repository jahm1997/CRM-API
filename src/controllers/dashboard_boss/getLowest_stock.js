const { Boss, Product } = require("../../db.js");
const { where, Op } = require("sequelize");

module.exports = async (id) => {
  const allProducts = await Boss.findByPk(id, {
    include: [
      {
        model: Product,
      },
    ],
  });

  if (allProducts !== null) {
    const products = allProducts.dataValues.products;
    let lowest_stock = products.map((p) => {
      const { name, quantity, discount } = p.dataValues;
      return { name, quantity, discount };
    });

    lowest_stock.sort((x, y) => x.quantity - y.quantity);
    lowest_stock = lowest_stock.slice(0, 10);

    return lowest_stock;
  } else {
    return [];
  }
};
