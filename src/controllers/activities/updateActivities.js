const { Activity } = require('../../db.js');
const getActivities =require('./getActivities.js')

module.exports = async (data) => {
    //data={id,method,state,from,to,message,subject,attached,saleman_id,***sale_id}
    const dataAct = { ...data }
    const id = dataAct.id
    delete dataAct.id
    const [resultado] = await Activity.update(dataAct, {
        where: {
            id,
        }
    })

    if (resultado) {
        const activity = await getActivities({id})
        return activity
    }
    else
        throw new Error('Failed to update, missing information')


}