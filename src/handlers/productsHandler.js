//Aca deberiamos de importar nuestros controllers
const allProducts = require("../controllers/products/getAllProducts.js");
const createProduct = require("../controllers/products/createProduct.js");
const updateProduct = require("../controllers/products/modifyProduct.js");
//Aca deberiamos de importar nuestros controllers

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getProducts = async (req, res) => {
  try {
    let products = await allProducts(req.query);
    res.status(200).send(products);
  } catch (error) {
    console.log("Error en producthandler", error);
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postProduct = async (req, res) => {
  const data = JSON.parse(req.body.productData);
  console.log(data);
  try {
    if (req.file) {
      var response = await createProduct(data, req.file.path);
    } else {
      var response = await createProduct(data);
    }
    res.status(200).json(response);
  } catch (error) {
    console.log("Error en producthandler", error);
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putProduct = async (req, res) => {
  const data = JSON.parse(req.body.productData);
  console.log(data);
  try {
    if (req.file) {
      var response = await updateProduct(data, req.file.path);
    } else {
      var response = await updateProduct(data);
    }
    res.status(200).send(response);
  } catch (error) {
    console.log("Error en producthandler", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getProducts,
  postProduct,
  putProduct,
};
