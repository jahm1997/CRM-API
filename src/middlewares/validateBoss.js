const { Boss } = require("../db.js");

module.exports = async (req, res, next) => {
  const { email } = req.body;
  let exist = await Boss.findOne({ where: { email: email } });
  if (exist !== null)
    res.status(100).json({ warning: "The boss already exists" });
  if (exist === null) next();
};
