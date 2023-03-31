const { Salesman, Boss } = require("../../db.js");

const createSalesman = async ({ name, address, email, phone, enable }) => {
  const temp = await Boss.findAll();

  const salesman = await Salesman.create({
    name,
    address,
    email,
    phone,
    enable,
    bossId: temp[Math.floor(Math.random() * temp.length)].id,
  });

  return salesman;
};
module.exports = createSalesman;
