const activities = require("./activities");
const bosses = require("./bosses");
const salesmans = require("./salesmans");
const clients = require("./clients");
const products = require("./products");
const bcrypt = require("bcrypt");

module.exports = async ({
  Activity,
  Boss,
  Client,
  Feedback,
  Product,
  Sale_product,
  Salesman,
}) => {
  let pass = "12345";
  let password = bcrypt.hashSync(pass, 10);
  for (let i = 0; i < bosses.length; i++) {
    const newBoss = await Boss.findOrCreate({
      where: { ...bosses[i], password },
    });
    const salesmanArr = salesmans[i];
    const productArr = products[i];
    const activitiesArr = Object.values(activities)[i];
    console.log("**BOSSES", [i + 1], "/", [bosses.length]);
    for (let w = 0; w < productArr.length; w++) {
      const newProduct = await Product.findOrCreate({
        where: { ...productArr[w], bossId: newBoss[0].dataValues.id },
      });
    }
    for (let j = 0; j < salesmanArr.length; j++) {
      const newSalesman = await Salesman.findOrCreate({
        where: {
          ...salesmanArr[j],
          bossId: newBoss[0].dataValues.id,
          password,
        },
      });
      const clientArr = clients[j];
      console.log("****SALESMAN", [j + 1], "/", [salesmanArr.length]);
      for (let y = 0; y < clientArr.length; y++) {
        const newClient = await Client.findOrCreate({
          where: { ...clientArr[y], salesmanId: newSalesman[0].dataValues.id },
        });
        console.log("******CLIENT", [y + 1], "/", [clientArr.length]);
        const actividades = activitiesArr[y];
        console.log("********ACTIVITY", [y + 1], "/", [activitiesArr.length]);
        for (let b = 0; b < actividades.length; b++) {
          const newActivity = await Activity.findOrCreate({
            where: {
              ...actividades[b],
              to: clientArr[y].name,
              from: salesmanArr[j].name,
              salesmanId: newSalesman[0].dataValues.id,
              clientId: newClient[0].dataValues.id,
            },
          });
          if (newActivity[0].dataValues.state == "Concretado") {
            console.log("******************************", "concretado");
            const productbySale = await Product.findAll({
              where: { bossId: newBoss[0].dataValues.id },
            });
            const newSale_Poduct = await Sale_product.findOrCreate({
              where: {
                quantity_sale: 1,
                price_sale: productArr[b].sale_price,
                activityId: newActivity[0].dataValues.id,
                productId: productbySale[b].dataValues.id,
              },
            });
          }
        }
      }
      for (let y = 0; y < clientArr.length; y++) {
        const score = Math.floor(Math.random() * 5) + 1;
        const newFeedback = await Feedback.findOrCreate({
          where: { score, salesmanId: newSalesman[0].dataValues.id },
        });
      }
    }
  }
};
