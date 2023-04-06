const { Activity, Sale_product } = require("../../db.js");
const { Op } = require('sequelize');

module.exports = async (id) => {
    const tiempoTranscurrido = Date.now();
    const endDate = new Date(tiempoTranscurrido);
    const startDate = new Date(tiempoTranscurrido - 2592000000)

    const sales = await Sale_product.findAll({
        attributes: [
            ['quantity_sale', 'quantitySale'],
            ['price_sale', 'priceSale']
        ],
        include: [
            {
                model: Activity,
                where: {
                    salesmanId: id,
                    createdAt: {
                        [Op.between]: [startDate, endDate]
                    }
                },
            }
        ],
    });


    const monthly_sales = {}
    let total_monthly_sales = 0
    sales.forEach(sale => {
        const { quantitySale, priceSale, activity } = sale.dataValues
        const date = activity.dataValues.createdAt.toLocaleDateString()
        if (monthly_sales[date]) {
            monthly_sales[date] += quantitySale * priceSale
        } else {
            monthly_sales[date] = quantitySale * priceSale
        }
        total_monthly_sales += quantitySale * priceSale
    });

    return { monthly_sales, total_monthly_sales }
}