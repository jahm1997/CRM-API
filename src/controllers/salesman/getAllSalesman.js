const { Salesman } = require("../../db.js");

module.exports = async () => {
  const salesman = await Salesman.findAll();
  return salesman;
};
