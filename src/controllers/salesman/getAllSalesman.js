const { Salesman, Feedback, conn } = require("../../db.js");
const customSalesman = require("./customSalesman.js");

const getAllSalesman = async (data) => {
  console.log(data);
  const { id, name, address, email, phone, enable, bossId } = data;
  if (id) {
    const salesman = await Salesman.findByPk(id, {
      include: [
        {
          model: Feedback,
          order: [["createdAt", "DESC"]],
          limit: 50,
        },
      ],
    });
    return await customSalesman(salesman);
  }

  if (name || address || email || phone || enable) {
    // delete data.bossId
    const variable = name || address || email || phone || enable;
    const [propiedad] = Object.keys(data);
    const allSalesman = await Salesman.findAll({
      where: {
        bossId,
        [propiedad]: variable,
      },

      include: [
        {
          model: Feedback,
          order: [["createdAt", "DESC"]],
          limit: 50,
        },
      ],
    });

    const result = await Promise.all(
      allSalesman.map(async (salesman) => await customSalesman(salesman))
    );
    return result[0];
  }

  const allSalesman = await Salesman.findAll({
    where: {
      bossId,
    },
    include: [
      {
        model: Feedback,
        order: [["createdAt", "DESC"]],
        limit: 50,
      },
    ],
  });
  console.log("este es conbsole.log() en linea 56 getallSalesman", allSalesman);
  const result = await Promise.all(
    allSalesman.map(async (salesman) => await customSalesman(salesman))
  );
  return result;
};

module.exports = getAllSalesman;
