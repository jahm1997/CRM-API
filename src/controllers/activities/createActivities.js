const { Activity, Sale_product, Product } = require("../../db.js");
const { sendMail } = require("../email/notifyActivityClient.js");
const { sendMailFeedback } = require("../email/notifyFeddbackClient.js");
const getAllSalesman = require("../salesman/getAllSalesman.js");
const getClientById = require("../clients/getClientById.js");
const { where } = require("sequelize");

module.exports = async (data) => {
  //data={method,state,from,to,message,subject,attached,clientId,salesmanId,}
  if (data.salesmanId != null && data.clientId != null) {
    const newActivity = await Activity.create(data);
    //console.log("esto es newActivity", newActivity.dataValues);

    const vendedor = await getAllSalesman({ id: data.salesmanId });
    //console.log("esto es vendedor", vendedor);

    const cliente = await getClientById(newActivity.dataValues.clientId);
    //console.log("Este es cliente", cliente);
    if (data.state === "Concretado") {
      sendMailFeedback(vendedor, cliente, newActivity.dataValues);
    }

    sendMail(vendedor, cliente, newActivity.dataValues, "creacion");
    return newActivity;
  } else {
    throw new Error("salesmanId or clientId is undefined");
  }
};
