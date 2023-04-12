const { Sale_product, Product } = require("../../db.js");
const Sequelize = require("sequelize");

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
    console.log("dataPriceSale", data["price_sale"]);
    const newSaleProduct = await Sale_product.create(data);

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
