

const { Salesman, Feedback, conn } = require("../../db.js");
const customSalesman = require("./customSalesman.js");


const getAllSalesman = async (data) => {
  const { id, name, address, email, phone, enable, bossId } = data

  if (id) {
    const salesman = await Salesman.findByPk(id, {
      include: [
        {
          model: Feedback,
          where: { salesmanId: id }
        }
      ],
    });

    return customSalesman(salesman);
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

    return allSalesman.map(salesman => customSalesman(salesman));
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
  return allSalesman.map(salesman => customSalesman(salesman));
};

module.exports = getAllSalesman;
