const { Salesman } = require("../../db.js");
const bcrypt = require("bcrypt");
const getAllSalesman = require("./getAllSalesman.js");

const createSalesman = async (data) => {
  const { password, bossId } = data

  if (bossId != null) {
    const salesman = await Salesman.create({
      ...data,
      password: bcrypt.hashSync(password, 10),
    });
    return getAllSalesman({ id: salesman.dataValues.id });
  } else {
    throw new Error('bossId is undefined')
  }
}
module.exports = createSalesman;