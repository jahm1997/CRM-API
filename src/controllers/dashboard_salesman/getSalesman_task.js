const { Task } = require('../../db.js');


module.exports = async (id) => {

    const task = await Task.findAll(
        {
            where: {
                salesmanId: id
            }
        }
    )
    return task
}

