const { Activity, Sale_product, Salesman } = require("../../db.js");
const { Op } = require('sequelize');
const getAllSalesman = require("../salesman/getAllSalesman.js");

module.exports = async (id) => {
    const tiempoTranscurrido = Date.now();
    const endDate = new Date(tiempoTranscurrido);
    const startDate = new Date(tiempoTranscurrido - 2629440000)

    const sales = await Sale_product.findAll({
        attributes: [
            ['quantity_sale', 'quantitySale'],
            ['price_sale', 'priceSale']
        ],
        include: [
            {
                model: Activity,
                where: {
                    createdAt: {
                        [Op.between]: [startDate, endDate]
                    }
                },
                include: [
                    {
                        model: Salesman,
                        where: {
                            bossId: id
                        }
                    }
                ]
            }
        ],
    });

    const month = [
        'Enero', 'Febrero', 'Marzo', 'Abril',
        'Mayo', 'Junio', 'Julio', 'Agosto',
        'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const monthly_sales = {}

    sales.forEach(sale => {
        const { quantitySale, priceSale, activity } = sale.dataValues
        const numberMonth = activity.dataValues.createdAt.getMonth()
        const nameMonth = month[numberMonth]
        const date = activity.dataValues.createdAt.toLocaleDateString()
        if (monthly_sales[nameMonth]) {
            monthly_sales[nameMonth][date] += quantitySale * priceSale
        } else {
            monthly_sales[nameMonth] = { [date]: quantitySale * priceSale }
        }
    });

    return monthly_sales
}