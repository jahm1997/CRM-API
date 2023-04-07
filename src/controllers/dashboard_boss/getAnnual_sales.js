const { Activity, Sale_product, Salesman } = require("../../db.js");
const { Op } = require('sequelize');

module.exports = async (id) => {
    const tiempoTranscurrido = Date.now();
    const endDate = new Date(tiempoTranscurrido);
    const startDate = new Date(tiempoTranscurrido - 31536000000)

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


    const annual_sales = {}
    const month = [
        'Enero', 'Febrero', 'Marzo', 'Abril',
        'Mayo', 'Junio', 'Julio', 'Agosto',
        'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    sales.forEach(sale => {
        const { quantitySale, priceSale, activity } = sale.dataValues
        const m = activity.dataValues.createdAt.getMonth()
        const year = activity.dataValues.createdAt.getFullYear()
        const date=`${month[m]}/${year}`
        if (annual_sales[date]) {
            annual_sales[date] += quantitySale * priceSale
        } else {
            annual_sales[date] = quantitySale * priceSale
        }
    });

    return annual_sales
}