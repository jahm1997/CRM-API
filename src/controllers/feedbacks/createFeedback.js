const { Feedback } = require('../../db.js');

module.exports=async (data)=>{
    //data={score,salesmanId}
    if (data.salesmanId != null) {
        const newFeedback = await Feedback.create(data)
        return newFeedback;
    } else {
        throw new Error('salesmanId is undefined')
    }
}