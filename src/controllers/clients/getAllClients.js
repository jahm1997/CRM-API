const { Client, Salesman } = require("../../db.js");
const statusNegotiation = require("./statusNegotiation.js");
const ctotalPurchased = require("./totalPurchased.js");

module.exports = async ({ salesmanId, bossId }) => {
  let allClients

  if (!salesmanId && !bossId)
    throw new Error('salesmanId or bossId required')
    
  if (salesmanId) {
    allClients = await Client.findAll({ where: { salesmanId } });
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

  const resultadoFinal = await Promise.all(
    allClients.map(async (c) => {
      let estado = await statusNegotiation({ id: c.dataValues.id });
      if (estado == null) {
        estado = { state: "Pendiente" };
      }
      delete c.dataValues.salesman
      const {totalPurchased, categories}=await ctotalPurchased({ id: c.dataValues.id })
      return {
        ...c.dataValues,
        status: estado.state,
        totalPurchased,
        categories
      };
    })
  );
  return resultadoFinal;
};
