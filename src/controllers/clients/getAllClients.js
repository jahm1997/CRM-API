const { Client } = require("../../db.js");
const statusNegotiation = require("./statusNegotiation.js");
const totalPurchased = require("./totalPurchased.js");

module.exports = async (salesmanId) => {
  const allClients = await Client.findAll({where:{salesmanId}});

  let resultadoFinal = await Promise.all(
    allClients.map(async (c) => {
      let estado = await statusNegotiation({ id: c.dataValues.id });
      if (estado == null) {
        estado = { state: "Pendiente" };
      }
      return {
        ...c.dataValues,
        status: estado.state,
        totalPurchased: await totalPurchased({ id: c.dataValues.id }),
      };
    })
  );
  return resultadoFinal;
};
