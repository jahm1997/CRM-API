const { Salesman } = require("../../db.js");

const getAllSalesman = async (data) => {
  const { id, name, address, email, phone, enable, bossId } = data

  if (id) {
    const salesman = await Salesman.findByPk(id);
    return salesman;
  }

  if (name || address || email || phone || enable) {
    delete data.bossId
    const variable = name || address || email || phone || enable;
    const [propiedad] = Object.keys(data);
    const allSalesman = await Salesman.findAll({ where: { bossId, [propiedad]: variable } });
    return allSalesman;
  }
  
  const allSalesman = await Salesman.findAll({ where: { bossId } });
  return allSalesman;
};

module.exports = getAllSalesman;
