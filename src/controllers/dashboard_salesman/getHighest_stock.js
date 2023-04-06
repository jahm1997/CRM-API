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

    let Highest_stock = salesmen.map((s) => {
        const { name, quantity, discount } = s.dataValues.boss.product
        return { name, quantity, discount }
    })

    Highest_stock.sort((y, x) => x.quantity - y.quantity)
    Highest_stock = Highest_stock.slice(0, 10)

    return Highest_stock
}