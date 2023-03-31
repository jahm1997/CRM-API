const {Boss} = require('../../db.js');

const updateBoss = async({
    id,
    name,
    company,
    company_description,
    commercial_register,
    address,
    email,
    phone,
    logo,
    enable,
  }) => {
    await Boss.update({
        name,
        company,
        company_description,
        commercial_register,
        address,
        email,
        phone,
        logo,
        enable,
      }, {
        where: {
            id,
        }
      })
  }

  module.exports = updateBoss;