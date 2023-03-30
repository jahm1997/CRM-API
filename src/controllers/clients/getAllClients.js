const { Client } = require('../../db.js')

const getAllClients = async() => {
    const allClients = await Client.findAll();
    return allClients;
}

module.exports = getAllClients;