const { Client, Salesman } = require("../../db.js");
const statusNegotiation = require("./statusNegotiation.js");
const totalPurchased = require("./totalPurchased.js");

module.exports = async ({ salesmanId, bossId }) => {
  let allClients

  if (salesmanId) {
    allClients = await Client.findAll({ where: { salesmanId, enable: true } });
  }

  if (bossId) {
    allClients = await Client.findAll({
      include: {
        model: Salesman,
        where: {
          bossId
        }
      }
    });
  }

  let resultadoFinal = await Promise.all(
    allClients.map(async (c) => {
      let estado = await statusNegotiation({ id: c.dataValues.id });
      if (estado == null) {
        estado = { state: "Pendiente" };
      }
      delete c.dataValues.salesman
      return {
        ...c.dataValues,
        status: estado.state,
        totalPurchased: await totalPurchased({ id: c.dataValues.id }),
      };
    })
  );
  return resultadoFinal;
};
