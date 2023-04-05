const { Task } = require('../../db.js');

module.exports=async (data)=>{
    //data={method,state,from,to,message,subject,attached,clientId,salesmanId,}
    if (data.salesmanId != null && data.clientId != null) {
        const newTask = await Task.create(data)
        return newTask;
    } else {
        throw new Error('salesmanId or clientId is undefined')
    }
}