const { Activity } = require('../../db.js');

module.exports = async ({ id, clientId, salesmanId }) => {

    if (!id && !clientId && !salesmanId)
        throw new Error('id activity\'s, clientId or salesmanId required')

    if (clientId) {
        const activity = await Activity.findAll({ where: { clientId } })
        return activity
    }

    if (id) {
        const activity = await Activity.findByPk(id)
        return activity
    }

    if (salesmanId) {
        const activity = await Activity.findAll({ where: { salesmanId } })
        return activity
    }
}