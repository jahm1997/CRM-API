//Aca deberiamos de importar nuestros controllers
const allProducts = require("../controllers/products/getAllProducts.js");
const createProduct = require("../controllers/products/createProduct.js");
const updateProduct = require("../controllers/products/modifyProduct.js");
const uploadFile = require("../firebase.js");
const fs = require("fs");
//Aca deberiamos de importar nuestros controllers

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getProducts = async (req, res) => {
  const data = req.query;
  try {
    let products = await allProducts(data);
    res.status(200).send(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postProduct = async (req, res) => {
  const data = JSON.parse(req.body.productData);
  const { path } = req.file;
  try {
    const img = fs.readFileSync(path).buffer;
    const image = await uploadFile(img, "products");
    const response = await createProduct({ ...data, image });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putProduct = async (req, res) => {
  try {
    if (req.file.path) {
      const data = JSON.parse(req.body.productData);
      const img = fs.readFileSync(path).buffer;
      const image = await uploadFile(img, "products");
      const response = await updateProduct({ ...data, image });
      res.status(200).send(response);
    } else {
      const data = JSON.parse(req.body.productData);
      const response = await updateProduct(data);
      res.status(200).send(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getProducts,
  postProduct,
  putProduct,
};
