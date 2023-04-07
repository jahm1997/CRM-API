

const { Salesman, Feedback, conn } = require("../../db.js");
const customSalesman = require("./customSalesman.js");


const getAllSalesman = async (data) => {
  const { id, name, address, email, phone, enable, bossId } = data

  if (id) {
    const salesman = await Salesman.findByPk(id, {
      include: [
        {
          model: Feedback
        }
      ],
    });

    return await customSalesman(salesman);
  }

  if (name || address || email || phone || enable) {
    delete data.bossId
    const variable = name || address || email || phone || enable;
    const [propiedad] = Object.keys(data);
    const allSalesman = await Salesman.findAll(
      {
        where:
        {
          bossId,
          [propiedad]: variable
        },

        include: [
          {
            model: Feedback
          }
        ],

      },

    );

    const result = await Promise.all(
      allSalesman.map(async (salesman) => await customSalesman(salesman))
    );
    return result[0]
  }

  const allSalesman = await Salesman.findAll(
    {
      where:
      {
        bossId
      },
      include: [
        {
          model: Feedback,
        }
      ],
    }
  );
  const result = await Promise.all(
    allSalesman.map(async (salesman) => await customSalesman(salesman))
  );
  return result
};

module.exports = getAllSalesman;
