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

    const products= salesmen[0].dataValues.boss.dataValues.products
    const offer_products = products.map((p) => {        
        const { name, quantity, discount } = p.dataValues
        return { name, quantity, discount }
    })

    return offer_products
}   