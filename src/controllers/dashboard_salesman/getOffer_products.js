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
                        model: Product,
                        where: {
                            discount: {
                                [Op.gt]: 0 // Filtra por "discount" mayor a 0
                            }
                        }
                    }
                ]
            }
        ]
    });

    const offer_products = salesmen.map((s) => {
        const { name, quantity, discount } = s.dataValues.boss.product
        return { name, quantity, discount }
    })

    return offer_products
}