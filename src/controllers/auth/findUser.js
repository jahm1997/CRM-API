const { Salesman, Boss } = require("../../db.js");
const bcrypt = require("bcrypt");

module.exports = async ({ email, password }) => {
  let boss = await Boss.findOne({ where: { email: email } });
  if (boss == null) {
    let saleman = await Salesman.findOne({ where: { email: email } });
    if (bcrypt.compareSync(password, saleman.password))
      return { ...saleman.dataValues, role: "seller" };
  }
  return { ...boss.dataValues, role: "admin" };
};
