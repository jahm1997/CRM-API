const { Boss } = require("../../db.js");
const {sendMail} = require('../email/email.js');

const createBoss = async (data) => {
  const newBoss = await Boss.create(data);

  sendMail(newBoss);

  return newBoss;
};

module.exports = createBoss;
