const { Boss } = require("../../db.js");
const { sendMail } = require('../email/email.js');
const bcrypt = require("bcrypt");

const createBoss = async (data) => {

  if (data.password === null)
    data.password = "12345"

  const newBoss = await Boss.create(
    {
      ...data,
      password: bcrypt.hashSync(data.password, 10)
    }
  );

  sendMail(newBoss);

  return newBoss;
};

module.exports = createBoss;
