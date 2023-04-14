const { Activity } = require("../../db.js");
const getActivities = require("./getActivities.js");
const getAllSalesman = require("../salesman/getAllSalesman.js");
const getClientById = require("../clients/getClientById.js");
const { sendMail } = require("../email/notifyActivityClient.js");

module.exports = async (data) => {
  //data={id,method,state,from,to,message,subject,attached,saleman_id,***sale_id}
  const dataAct = { ...data };
  let state = await Activity.findOne({ where: { id: data.id } });
  let statePrev = state.dataValues.state;
  const id = dataAct.id;
  delete dataAct.id;
  const [resultado] = await Activity.update(dataAct, {
    where: {
      id,
    },
  });

  if (resultado) {
    const activity = await getActivities({ id });

    const vendedor = await getAllSalesman({ id: data.salesmanId });

    const cliente = await getClientById(activity.clientId);

    //Solo cuando se modifica el estado de negociacion
    let infoActivity = { ...activity.dataValues, statePrev };
    if (statePrev !== infoActivity.state) {
      sendMail(vendedor, cliente, infoActivity, "cambio");
    }

    return activity;
  } else throw new Error("Failed to update, missing information");
};
