const { Activity, Sale_product, Salesman } = require("../../db.js");
const { Op } = require("sequelize");
const getAllSalesman = require("../salesman/getAllSalesman.js");

module.exports = async (id) => {
  const tiempoTranscurrido = Date.now();
  const endDate = new Date(tiempoTranscurrido);
  const startDate = new Date(tiempoTranscurrido - 2592000000);

  const sales = await Sale_product.findAll({
    attributes: [
      ["quantity_sale", "quantitySale"],
      ["price_sale", "priceSale"],
    ],
    include: [
      {
        model: Activity,
        where: {
          createdAt: {
            [Op.between]: [startDate, endDate],
          },
        },
        include: [
          {
            model: Salesman,
            where: {
              bossId: id,
            },
          },
        ],
      },
    ],
  });

  const monthly_sales = {};

  sales.forEach((sale) => {
    const { quantitySale, priceSale, activity } = sale.dataValues;
    const salesman = activity.dataValues.salesman.dataValues;
    if (monthly_sales[salesman.id]) {
      monthly_sales[salesman.id] += quantitySale * priceSale;
    } else {
      monthly_sales[salesman.id] = quantitySale * priceSale;
    }
  });

  if (sales.length) {
    let thebest = Object.keys(monthly_sales)[0];
    let max = Object.values(monthly_sales)[0];
    Object.keys(monthly_sales).forEach((salesman) => {
      if (monthly_sales[salesman] > max) {
        max = monthly_sales[salesman];
        thebest = salesman;
      }
    });
    return await getAllSalesman({ id: thebest });
  }
  return {};
};
