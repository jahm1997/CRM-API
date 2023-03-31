const { Boss } = require('../../db.js');

const createBoss = async ({
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
    const newBoss = Boss.create({
        name,
        company,
        company_description,
        commercial_register,
        address,
        email,
        phone,
        logo,
        enable,
    });

    return newBoss;
}

module.exports = createBoss;