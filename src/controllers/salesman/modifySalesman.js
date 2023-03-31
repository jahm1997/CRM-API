const { Salesman } = require("../../db.js");

const updateSalesman = async ({
  name,
  address,
  email,
  phone,
  enable,
  bossId,
}) => {
  await Salesman.update(
    {
      name,
      address,
      email,
      phone,
      enable,
      bossId,
    },
    {
      where: {
        id,
      },
    }
  );
};

module.exports = updateSalesman;
