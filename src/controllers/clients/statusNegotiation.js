const { Client, Activity } = require("../../db.js");

module.exports = async ({ id }) => {
  // console.log(id);
  // let activity = await Activity.findAll();
  // let client = await activity.filter((c) => c.clientId == id);
  // let stateNegotiation = client[client.length - 1];

  // return stateNegotiation;
  let stateNegotiation = await Activity.findOne({
    where: {
      clientId: id,
    },
    order: [["createdAt", "DESC"]],
    limit: 1,
    attributes: ["state"],
  });

  return stateNegotiation;
};
