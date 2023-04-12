const { Salesman } = require("../../db.js");
const getBossById = require("../Bosses/getBossById.js");
const bcrypt = require("bcrypt");
const getAllSalesman = require("./getAllSalesman.js");
const { sendMail } = require("../email/notifyNewSalesman.js");
const fs = require("fs");
const uploadFile = require("../../firebase.js");

const createSalesman = async (data, path) => {
  const { password, bossId } = data;
  if (password === null) password = "12345";
  if (bossId != null) {
    if (path) {
      const img = fs.readFileSync(path).buffer;
      const image = await uploadFile(img, "salesman");
      var salesman = await Salesman.create({
        ...data,
        password: bcrypt.hashSync(password, 10),
        image,
      });
    } else {
      var salesman = await Salesman.create({
        ...data,
        password: bcrypt.hashSync(password, 10),
      });
    }
    const boss = await getBossById(bossId);

    sendMail(salesman.dataValues, boss);

    return getAllSalesman({ id: salesman.dataValues.id });
  } else {
    throw new Error("bossId is undefined");
  }
};
module.exports = createSalesman;
