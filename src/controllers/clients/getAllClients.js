const { Client, Salesman } = require("../../db.js");
const statusNegotiation = require("./statusNegotiation.js");
const ctotalPurchased = require("./totalPurchased.js");

module.exports = async ({ salesmanId, bossId }) => {
  if (!salesmanId && !bossId) throw new Error("salesmanId or bossId required");

  let allClients;

  if (salesmanId) {
    const allClientsbyseller = await Client.findAll({ where: { salesmanId } });
    allClients = allClientsbyseller.map((e) => e.dataValues);
  } else if (bossId) {
    var allClientsbyboss = await Client.findAll({
      include: {
        model: Salesman,
        where: {
          bossId,
        },
      },
    });
    allClients = allClientsbyboss.map((e) => e.dataValues);
  }
  console.log("allClients", allClients);
  const resultadoFinal = await Promise.all(
    allClients.map(async (c) => {
      let estado = await statusNegotiation({ id: c.id });
      if (estado == null) {
        estado = { state: "Pendiente" };
      }
      const { totalPurchased, categories } = await ctotalPurchased({
        // delete c.dataValues.salesman;
        id: c.id,
      });
      return {
        ...c,
        status: estado.state,
        totalPurchased,
        categories,
      };
    })
  );
  console.log(resultadoFinal);
  if (!resultadoFinal) {
    return [];
  }

  return resultadoFinal;
};
