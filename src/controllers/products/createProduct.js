const { Product } = require("../../db.js");

module.exports = async (data) => {
  //data={method,state,from,to,message,subject,attached,clientId,salesmanId,}
  if (data['bossId'] != null) {
    const newProduct = await Product.create(data)
    return newProduct;
  } else {
    throw new Error('bossId is undefined')
  }
}
