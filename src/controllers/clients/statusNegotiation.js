const { Client, Activity } = require("../../db.js");

module.exports = async ({ id }) => {
  let activity = await Activity.findAll();
  let client = await activity.filter((c) => c.clientId == id);
  let stateNegotiation = client[client.length - 1];

  return stateNegotiation;
};
