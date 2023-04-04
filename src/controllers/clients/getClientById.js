const { Client } = require("../../db.js");
const statusNegotiation = require("./statusNegotiation.js");
const totalPurchased = require("./totalPurchased.js");

module.exports = async (id) => {
  const allClients = await Client.findAll();
  const client = allClients.filter((ele) => ele.id === id);

  console.log(client);

  let estado = await statusNegotiation({ id });
  let total = await totalPurchased({ id });
  if (estado == null) {
    estado = { state: "Pendiente" };
  }
  let resultado = {
    ...client[0].dataValues,
    status: estado.state,
    totalPurchased: total,
  };
  return resultado;
};
