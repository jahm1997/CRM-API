const { Feedback } = require('../../db.js');

module.exports=async  ({id = null, salesmanId=null}) => {
    if (id !== null) {
        const feedback = await Feedback.findByPk(id)
        return feedback
    } 
    if (salesmanId !== null){
        const feedback = await Feedback.findAll({where: { salesmanId }})
        return feedback
    }
    throw new Error('FeedbackId(id) or salesmanId is undefined')
}