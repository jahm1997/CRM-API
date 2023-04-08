const { Salesman, Boss } = require("../../db.js");
const bcrypt = require("bcrypt");
const createBoss = require("../Bosses/CreateBoss.js");


module.exports = async ({ name, username, email, password = null, status }) => {

  if (status === 'login') {
    let salesman = await Salesman.findOne({ where: { email: email } });
    if (salesman !== null) {
      if (password !== null) {
        if (bcrypt.compareSync(password, salesman['password']))
          return { ...salesman.dataValues, role: "seller" };
        else
          throw new Error('Salesman Password Incorrect')
      }
    }

    let boss = await Boss.findOne({ where: { email: email } });
    if (boss !== null) {
      if (password !== null) {
        if (bcrypt.compareSync(password, boss['password']))
          return { ...boss.dataValues, role: "admin" };
        else
          throw new Error('Boss Password Incorrect')
      } else {
        return { ...boss.dataValues, role: "admin" };
      }
    }

    throw new Error('User Not Exist')
  } else {
    if (!name || !username)
      data = { name: email, username: email, email, password }
    else
      data = { name, username, email, password }
    boss = await createBoss(data);
    const jefe = { ...boss.dataValues }
    jefe.role = 'admin'
    return jefe
  }
}
