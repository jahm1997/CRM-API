const { Client } = require('../../db');

module.exports = async (data) => {
    //data={ name, email, phone, vip, enable, salesmanId }

    const nC = await Client.create(data)
    return nC;

}
