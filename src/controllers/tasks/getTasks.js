const { Task } = require('../../db.js');

module.exports = async (id = null) => {
    if (id === null) {
        const task = await Task.findAll()
        return task
    } else {
        const task = await Task.findByPk(id)
        return task
        
        /* if (activity !== null)
            return activity
        else
            throw new Error('id is not exist') */
    }
}