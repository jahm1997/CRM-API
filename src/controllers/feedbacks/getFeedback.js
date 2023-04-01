const { Feedback } = require('../../db.js');

module.exports=async  ({id = null, salesmanId=null}) => {
    if (id === null) {
        const feedback = await Feedback.findAll({where: { salesmanId }})
        return feedback
    } else {
        const feedback = await Feedback.findByPk(id)
        return feedback
    }
}