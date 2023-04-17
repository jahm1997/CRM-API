const { Salesman, Boss } = require("../../db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createBoss = require("../Bosses/CreateBoss.js");

const createToken = (user, role) => {
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) * 60 * 60 * 24 * 7,
      ...user.dataValues,
      role,
    },
    "secret"
  );
  return { success: true, token };
};

module.exports = async (data) => {
  console.log(data);
  const { email, password, name, nickname } = data;

  let salesman = await Salesman.findOne({ where: { email: email } });
  if (salesman !== null) {
    if (password !== null) {
      if (bcrypt.compareSync(password, salesman.dataValues["password"]))
        if (salesman.dataValues.enable !== false) {
          return createToken(salesman, "seller");
        } else {
          throw new Error("user blocked");
        }
      else throw new Error("Salesman Password Incorrect");
    }
  }

  let boss = await Boss.findOne({ where: { email: email } });
  if (boss !== null) {
    if (password !== null) {
      if (bcrypt.compareSync(password, boss.dataValues["password"]))
        return createToken(boss, "admin");
      else throw new Error("Boss Password Incorrect");
    } else {
      return createToken(boss, "admin");
    }
  }

  if (nickname) {
    let boss = await createBoss({
      name,
      username: nickname,
      email,
    });
    console.log("Este es find user antes de mandar el token", boss);
    return createToken(boss, "admin");
  }

  throw new Error("User Not Exist");
};

//   try {
//     let boss = await Boss.findOne({ where: { email: email } });

//     // console.log('***********PASSWORD********', password)
//     if (!boss) {
//       let salesman = await Salesman.findOne({ where: { email: email } });
//       if (bcrypt.compareSync(password, salesman.dataValues['password'])) {
//         const token = jwt.sign({
//           exp: Math.floor(Date.now()/1000) * 60 * 60 * 24 * 7,
//           ...salesman.dataValues,
//           role: "seller"
//         }, "secret")
//         return {success:true, token};
//       }
//       // if (password === salesman.dataValues.password) {
//       //   return { ...salesman.dataValues, role: "seller" };
//       // }
//     }

//     if (bcrypt.compareSync(password, boss.dataValues['password'])) {
//       const token = jwt.sign({
//         exp: Math.floor(Date.now()/1000) * 60 * 60 * 24 * 7,
//         ...boss.dataValues,
//         role: "admin"
//       }, "secret")
//       return {success:true, token};
//     }
//     // if (password === boss.dataValues.password) {
//     //   return { ...boss.dataValues, role: "admin" };
//     // }
//   } catch (error) {
//     return { error: error.message }
//   }
// }
