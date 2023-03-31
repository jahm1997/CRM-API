const { Salesman } = require("../../db.js");

const getAllSalesman = async () => {
  const allSalesman = await Salesman.findAll();
  return allSalesman;
};

module.exports = getAllSalesman;
