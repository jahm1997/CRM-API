const { Client } = require("../../db.js");
const getClientById = require("./getClientById.js");

module.exports = async (data) => {
  const dataAct = { ...data };
  const id = dataAct.id;
  delete dataAct.id;
  const [resultado] = await Client.update(dataAct, {
    where: {
      id,
    },
  });

  if (resultado) {
    return await getClientById(id);
  } else throw new Error("Failed to update, missing information");
};
