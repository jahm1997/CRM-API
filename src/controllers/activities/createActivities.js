const { Activity } = require('../../db.js');

module.exports=async (data)=>{
    //data={method,state,from,to,message,subject,attached,sale_id,clientId,salesmanId,}
    if (data.salesmanId != null && data.clientId != null) {
        const newActivity = await Activity.create(data)
        return newActivity;
    } else {
        throw new Error('salesmanId or client_id is undefined')
    }
}