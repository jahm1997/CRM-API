const { Boss } = require("../../db.js");

const createBoss = async (data) => {
  const newBoss = await Boss.create(data);

  return newBoss;
};

module.exports = createBoss;
