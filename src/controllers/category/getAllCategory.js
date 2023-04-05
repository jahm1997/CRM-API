const { Product } = require('../../db.js');


module.exports = async ({ bossId }) => {
    if (!bossId)
        throw new Error('bossId required')

    const categories = await Product.findAll({
        attributes: [
            ['category', 'category']
        ],
        where: { bossId }
    })

    const response = []
    for (let i = 0; i < categories.length; i++) {
        const element = categories[i];
        
        if (!response.includes(element.dataValues.category))
            response.push(element.dataValues.category)
    }

    return response
}