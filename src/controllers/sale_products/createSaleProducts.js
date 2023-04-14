const {
  Sale_product,
  Product,
  Client,
  Activity,
  Salesman,
} = require("../../db.js");
const Sequelize = require("sequelize");
const { sendMail } = require("../email/notifyBuyClient.js");

module.exports = async (data) => {
  //data={ quantity_sale, price_sale, productId, activityId }
  const product = await Product.findOne({ where: { id: data.productId } });
  //HAY QUE HACER product.dataValues.quantity
  // console.log("product =>>> ", product);
  if (product.dataValues.quantity < data.quantity_sale)
    throw new Error(
      `Se excede de la cantidad disponible, (${product.dataValues.quantity}), usted quiere vender (${data.quantity_sale})`
    );
  if (data["activityId"] && data["productId"]) {
    //Si el descuento de Product es mayor que cero, entonces al producto vendido le aplicamos el descuento
    if (product.dataValues.discount > 0) {
      data["price_sale"] =
        data.price_sale - data.price_sale * (product.dataValues.discount / 100);
    }

    const newSaleProduct = await Sale_product.create(data);

    let act = (await Activity.findOne({ where: { id: data.activityId } }))
      .dataValues;
    let client = (await Client.findOne({ where: { id: act.clientId } }))
      .dataValues;
    let salesman = (await Salesman.findOne({ where: { id: act.salesmanId } }))
      .dataValues;
    //Debe recibir (client, salesman, product, sale_product)

    sendMail(client, salesman, product.dataValues, data);

    //Product ======> (id, name, quantity,cost_price, sale_price, discount)
    await Product.update(
      {
        quantity: Sequelize.literal(`quantity - ${Number(data.quantity_sale)}`),
      },
      { where: { id: data.productId } }
    );

    return newSaleProduct;
  } else {
    throw new Error("activityId and productId required");
  }
};
