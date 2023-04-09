const { Product } = require("../../db.js");
const fs = require("fs");
const uploadFile = require("../../firebase.js");

module.exports = async (data, path) => {
  //data={method,state,from,to,message,subject,attached,clientId,salesmanId,}
  if (data["bossId"] != null) {
    if (path) {
      const img = fs.readFileSync(path).buffer;
      const image = await uploadFile(img, "products");
      var newProduct = await Product.create({ ...data, image });
    } else {
      var newProduct = await Product.create(data);
    }
    return newProduct;
  } else {
    throw new Error("bossId is undefined");
  }
};
