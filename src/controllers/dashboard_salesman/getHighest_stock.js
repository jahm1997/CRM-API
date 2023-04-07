const { Salesman, Boss, Product } = require("../../db.js");
const { where, Op } = require("sequelize");

module.exports = async (id) => {
    const salesmen = await Salesman.findAll({
        where: {
            id
        },
        include: [
            {
                model: Boss,
                include: [
                    {
                        model: Product
                    }
                ]
            }
        ]
    });

    const products= salesmen[0].dataValues.boss.dataValues.products
    let highest_stock = products.map((p) => {
        const { name, quantity, discount } = p.dataValues
        return { name, quantity, discount }
    })

    highest_stock.sort((y, x) => x.quantity - y.quantity)
    highest_stock = highest_stock.slice(0, 10)

    return highest_stock
}