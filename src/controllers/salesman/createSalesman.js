const { Salesman, Boss } = require("../../db.js");
const bcrypt = require("bcrypt");

const createSalesman = async ({
  name,
  address,
  email,
  password,
  phone,
  enable,
}) => {
  const temp = await Boss.findAll();
  const salesman = await Salesman.create({
    name,
    address,
    email,
    password: bcrypt.hashSync(password, 10),
    phone,
    enable,
    bossId: temp[Math.floor(Math.random() * temp.length)].id,
  });

  return salesman;
};
module.exports = createSalesman;
