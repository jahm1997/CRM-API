const { Client } = require("../../db.js");

const updateClient = async ({
  id,
  name,
  email,
  phone,
  vip,
  enable,
  salesmanId,
}) => {
  await Client.update(
    {
      name,
      email,
      phone,
      vip,
      enable,
      salesmanId,
    },
    {
      where: {
        id,
      },
    }
  );
};

module.exports = updateClient;
