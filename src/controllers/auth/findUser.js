const { Salesman, Boss } = require("../../db.js");
const bcrypt = require("bcrypt");
const createBoss = require("../Bosses/CreateBoss.js");


module.exports = async ({ name, username, email, password = null }) => {


  let salesman = await Salesman.findOne({ where: { email: email } });
  if (salesman !== null) {
    if (password !== null) {
      if (bcrypt.compareSync(password, salesman['password']))
        return { ...salesman.dataValues, role: "seller" };
      else
        throw new Error('Password salesman Incorrect')
    }
  }

  let boss = await Boss.findOne({ where: { email: email } });
  if (boss !== null) {
    if (password !== null) {
      if (bcrypt.compareSync(password, boss['password']))
        return { ...boss.dataValues, role: "admin" };
      else
        throw new Error('Password boss Incorrect')
    } else {
      return { ...boss.dataValues, role: "admin" };
    }
  }

  if (!name || !username)
    data = { name: email, username: email, email, password }
  else
    data = { name, username, email, password }
    
  boss = await createBoss(data);
  const jefe = { ...boss.dataValues }
  jefe.role = 'admin'
  return jefe

}
