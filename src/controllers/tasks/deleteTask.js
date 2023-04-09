const { Task } = require('../../db.js');

module.exports = async (id) => {
    const resp = await Task.destroy({ where: { id } })
    if (resp)
        return { message: `Tarea borrada` }
    else
        throw new Error('Tarea no encontrada')
}