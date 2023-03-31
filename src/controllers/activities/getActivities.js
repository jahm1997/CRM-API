const { Activity } = require('../../db.js');

module.exports = async (id = null) => {
    if (id === null) {
        const activity = await Activity.findAll()
        return activity
    } else {
        const activity = await Activity.findByPk(id)
        return activity
        
        /* if (activity !== null)
            return activity
        else
            throw new Error('id is not exist') */
    }
}