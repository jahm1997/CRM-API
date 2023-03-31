const { Boss } = require('../../db.js');

const getAllBosses = async() => {
    const allBosses = await Boss.findAll();
    return allBosses
}

module.exports = getAllBosses;