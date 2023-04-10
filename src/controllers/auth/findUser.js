const { Salesman, Boss } = require("../../db.js");
const bcrypt = require("bcrypt");
// const createBoss = require("../Bosses/CreateBoss.js");


module.exports = async (email, password) => {

  try {
    let boss = await Boss.findOne({ where: { email: email } });

    // console.log('***********PASSWORD********', password)
    if (!boss) {
      let salesman = await Salesman.findOne({ where: { email: email } });
      if (bcrypt.compareSync(password, salesman.dataValues['password'])) {
        return { ...salesman.dataValues, role: "seller" };
      }
      // if (password === salesman.dataValues.password) {
      //   return { ...salesman.dataValues, role: "seller" };
      // }
    }

    if (bcrypt.compareSync(password, boss.dataValues['password'])) {
      return { ...boss.dataValues, role: "admin" };
    }
    // if (password === boss.dataValues.password) {
    //   return { ...boss.dataValues, role: "admin" };
    // }
  } catch (error) {
    return { error: error.message }
  }
}



// if (status === 'login') {
//   let salesman = await Salesman.findOne({ where: { email: email } });
//   if (salesman !== null) {
//     if (password !== null) {
//       if (bcrypt.compareSync(password, salesman['password']))
//         return { ...salesman.dataValues, role: "seller" };
//       else
//         throw new Error('Salesman Password Incorrect')
//     }
//   }

//   let boss = await Boss.findOne({ where: { email: email } });
//   if (boss !== null) {
//     if (password !== null) {
//       if (bcrypt.compareSync(password, boss['password']))
//         return { ...boss.dataValues, role: "admin" };
//       else
//         throw new Error('Boss Password Incorrect')
//     } else {
//       return { ...boss.dataValues, role: "admin" };
//     }
//   }

//   throw new Error('User Not Exist')
// } else {
//   if (!name || !username)
//     data = { name: email, username: email, email, password }
//   else
//     data = { name, username, email, password }
//   const boss = await createBoss(data);
//   const jefe = { ...boss.dataValues }
//   jefe.role = 'admin'
//   return jefe
// }
