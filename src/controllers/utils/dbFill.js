const activities = require('./activities')
const bosses = require('./bosses')
const salesmans = require('./salesmans')
const clients = require('./clients')
const products = require('./products')

module.exports = async ({ Activity, Boss, Client, Feedback, Product, Sale_product, Salesman }) => {

  for (let i = 0; i < bosses.length; i++) {
    const newBoss = await Boss.findOrCreate({ where: bosses[i] });
    const salesmanArr = salesmans[i];
    const productArr = products[i];
    const activitiesArr = Object.values[i]
    for (let w = 0; w < productArr.length; w++) {
      const newProduct = await Product.findOrCreate({ where: { ...productArr[w], bossId: newBoss.id } });
    }
    for (let j = 0; j < salesmanArr.length; j++) {
      const newSalesman = await Salesman.findOrCreate({ where: { ...salesmanArr[j], bossId: newBoss.id } });
      const clientArr = clients[j];
      for (let y = 0; y < clientArr.length; y++) {
        const newClient = await Client.findOrCreate({ where: { ...clientArr[y], salesmanId: newSalesman.id } })
        for (let z = 0; z < activitiesArr.length; z++) {
          const newActivity = await Activity.findOrCreate({ where: { ...activitiesArr[z], to: clientArr[y].name, from: salesmanArr[j].name, salesmanId: newSalesman.id, clientId: newClient.id } })
          if (newActivity.state == "Concretado") {
            const newSale_Poduct = await Sale_product.findOrCreate({ where: { quantity_sale: 1, price_sale: productArr[z], activityId: newActivity.id, productId: Product.findAll({ where: { bossId: newBoss.id } })[z].id } })
          }
        }
      }
      for (let y = 0; y < clientArr.length; y++) {
        const score = Math.floor(Math.random() * 5) + 1;
        const newFeedback = await Feedback.findOrCreate({ where: { score, salesmanId: newSalesman.id } })
      }
    }
  }
};
