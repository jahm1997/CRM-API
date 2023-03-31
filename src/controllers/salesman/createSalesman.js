const { Salesman, Boss } = require("../../db.js");

module.exports = async ({ name, address, email, phone, enable }) => {
  const temp = await Boss.findAll();
  const salesman = await Salesman.create({
    name,
    address,
    email,
    phone,
    enable,
    // bossId,
  });

  return salesman;
};
