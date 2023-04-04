const { Activity, Sale_product } = require("../../db.js");

module.exports = async ({ id }) => {
  let activity = await Activity.findAll();
  //Dajamos solo un array de objetos
  let dataActivity = await activity.map((act) => act.dataValues);
  let activityClient = await dataActivity.filter((c) => c.clientId == id);
  let activityState = await activityClient.filter(
    (c) => c.state == "Concretado"
  );

  let sales = await Sale_product.findAll({
    include: {
      model: Activity,
      where: {
        clientId: id,
        state: "Concretado",
      },
    },
  });

  let saleProduct = await Sale_product.findAll();
  let dataSaleProduct = await saleProduct.map((act) => act.dataValues);
  let idSaleProduct = await dataSaleProduct.map((e) => {
    return {
      quantity_sale: e.quantity_sale,
      price_sale: e.price_sale,
      activityId: e.activityId,
    };
  });

  let final = [];
  let otro = [];
  for (let i = 0; i < idSaleProduct.length; i++) {
    for (let j = 0; j < activityState.length; j++) {
      if (idSaleProduct[i].activityId == activityState[j].id) {
        otro.push(idSaleProduct[i].activityId);
        final.push(idSaleProduct[i]);
      }
    }
  }

  //   idSaleProduct.forEach((sale) => {
  //     sales.forEach((activity) => {
  //       if (sale.activityId == activity.dataValues.id) {
  //         final.push(sale);
  //         console.log("aqui");
  //       }
  //     });
  //     return;
  //   });

  let suma = final.map((s) => s.quantity_sale * s.price_sale);
  return suma.reduce((anterior, actual) => anterior + actual, 0);
};
