const { Salesman } = require("../../db.js");
const bcrypt = require("bcrypt");
const getAllSalesman = require("./getAllSalesman.js");
const fs = require("fs");
const uploadFile = require("../../firebase.js");

const createSalesman = async (data, path) => {
  const { password, bossId } = data;

  if (bossId != null) {
    if (path) {
      const img = fs.readFileSync(path).buffer;
      const image = await uploadFile(img, "salesman");
      const salesman = await Salesman.create({
        ...data,
        password: bcrypt.hashSync(password, 10),
        image,
      });
      return getAllSalesman({ id: salesman.dataValues.id });
    } else {
      const salesman = await Salesman.create({
        ...data,
        password: bcrypt.hashSync(password, 10),
      });
      return getAllSalesman({ id: salesman.dataValues.id });
    }
  } else {
    throw new Error("bossId is undefined");
  }
};
module.exports = createSalesman;
