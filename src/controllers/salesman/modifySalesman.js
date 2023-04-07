const { Salesman } = require("../../db.js");
const getAllSalesman = require("./getAllSalesman.js");

module.exports = async (data) => {
  const dataAct = { ...data };
  const id = dataAct.id;
  delete dataAct.id;
  const [resultado] = await Salesman.update(dataAct, {
    where: {
      id,
    },
  });

  if (resultado) {
    return await getAllSalesman({id});
  } else throw new Error("Failed to update, missing information");
};
