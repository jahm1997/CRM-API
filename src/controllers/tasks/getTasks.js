const { Task } = require('../../db.js');

module.exports = async ({ id, clientId, salesmanId }) => {

    if (!id && !clientId && !salesmanId)
        throw new Error('id task\'s, clientId or salesmanId required')

    if (clientId) {
        const task = await Task.findAll({ where: { clientId } })
        return task
    }

    if (id) {
        const activity = await Task.findByPk(id)
        return activity
    }

    if (salesmanId) {
        const activity = await Task.findAll({ where: { salesmanId } })
        return activity
    }
}