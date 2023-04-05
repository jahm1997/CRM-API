//Aca deberiamos de importar nuestros controllers
const allProducts = require("../controllers/products/getAllProducts.js");
const createProduct = require("../controllers/products/createProduct.js");
const updateProduct = require("../controllers/products/modifyProduct.js");
//Aca deberiamos de importar nuestros controllers

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getProducts = async (req, res) => {
  const data = req.query
  try {
    let products = await allProducts(data);
    res.status(200).send(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postProduct = async (req, res) => {
  const {
    name,
    quantity,
    enable,
    cost_price,
    sale_price,
    discount,
    category,
    bossId,
  } = req.body;
  try {
    if (bossId) {
      await createProduct({
        name,
        quantity,
        enable,
        cost_price,
        sale_price,
        discount,
        category,
        bossId,
      });
      res.status(200).send("Producto creado/agregado correctamente!");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putProduct = async (req, res) => {
  const {
    id,
    name,
    quantity,
    enable,
    cost_price,
    sale_price,
    discount,
    category,
  } = req.body;
  try {
    await updateProduct({
      id,
      name,
      quantity,
      enable,
      cost_price,
      sale_price,
      discount,
      category,
    });
    res.status(200).send("Producto modificado/actualizado correctamente!");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getProducts,
  postProduct,
  putProduct,
};
