const { Client, Salesman } = require("../../db.js");
const statusNegotiation = require("./statusNegotiation.js");
const ctotalPurchased = require("./totalPurchased.js");

module.exports = async ({ salesmanId, bossId }) => {
  // if (!salesmanId && !bossId) throw new Error("salesmanId or bossId required");
  if (!salesmanId) throw new Error("salesmanId  required");

  if (salesmanId) {
    const allClientsbyseller = await Client.findAll({ where: { salesmanId } });
    var allClients = allClientsbyseller.map((e) => e.dataValues);
  }

  // if (bossId) {
  //   var allClientsbyboss = await Client.findAll({
  //     include: {
  //       model: Salesman,
  //       where: {
  //         bossId,
  //       },
  //     },
  //   });
  //   var allClientes = allClientsbyboss.map((e) => e.dataValues);
  // }
  const resultadoFinal = await Promise.all(
    allClients.map(async (c) => {
      let estado = await statusNegotiation({ id: c.id });
      if (estado == null) {
        estado = { state: "Pendiente" };
      }
      // delete c.dataValues.salesman;
      const { totalPurchased, categories } = await ctotalPurchased({
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
  return resultadoFinal;
};
