const { Boss } = require("../../db.js");

const getAllBosses = async () => {
  const allBosses = await Boss.findAll();
  const jefes = allBosses.map((b) => {
    const jefe = { ...b.dataValues };
    jefe.role = "admin";
    return jefe;
  });
  return jefes;
};

module.exports = getAllBosses;
