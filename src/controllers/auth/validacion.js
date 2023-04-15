const { Salesman, Boss } = require("../../db.js");
const jwt = require("jsonwebtoken");

module.exports = async (data) => {
  const { myToken } = data;
  if (!myToken) {
    return false;
  }
  const secret = "secret";
  try {
    var decodificacion = jwt.verify(myToken, secret);
  } catch (error) {
    return false;
  }
  const { email, password } = decodificacion;

  let salesman = await Salesman.findOne({ where: { email: email } });
  if (salesman !== null) {
    if (password !== null) {
      if (password === salesman.dataValues["password"]) {
        return salesman.salesman.dataValues;
      }
    }
  }
  let boss = await Boss.findOne({ where: { email: email } });
  if (boss !== null) {
    if (password !== null) {
      if (password === boss.dataValues.password) {
        return boss.dataValues;
      }
    }
  }

  //   if (nickname) {
  //     let boss = await createBoss({ name, username: nickname, email, password });
  //     return createToken(boss, 'admin')
  //   }
};
