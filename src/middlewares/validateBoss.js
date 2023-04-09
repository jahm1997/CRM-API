const { Boss } = require("../db.js");

module.exports = async (req, res, next) => {
  const { email } = JSON.parse(req.body.formLogin);
  try {
    let exist = await Boss.findOne({ where: { email: email } });
    if (exist !== null) res.status(200).json({ message: "El Jefe ya existe" });
    if (exist == null) next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
