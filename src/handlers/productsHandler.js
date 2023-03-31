//Aca deberiamos de importar nuestros controllers
// **** CONTROLLERS ***
//Aca deberiamos de importar nuestros controllers

const allProducts = require("../controllers/products/getAllProducts.js");
const createProduct = require("../controllers/products/createProduct.js");
const updateProduct = require("../controllers/products/modifyProduct.js");
const deleteProd = require("../controllers/products/deleteProduct.js");
//----------------------------------- HANDLERS GETS -----------------------------------\\
const getProducts = async (req, res) => {
  try {
    let products = await allProducts();
    res.status(200).send(products);
  } catch (error) {
    res.status(400).json({ error: "Product Not Found" });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postProduct = async (req, res) => {
  const { name, quantity, enable, cost_price, sale_price, discount, category } =
    req.body;
  try {
    await createProduct({
      name,
      quantity,
      enable,
      cost_price,
      sale_price,
      discount,
      category,
    });
    res.status(200).send("Producto creado/agregado correctamente!");
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
//----------------------------------- HANDLERS DELETE -----------------------------------\\
const deleteProduct = async (req, res) => {
  const { id } = req.body;
  try {
    await deleteProd({ id });
    res.status(200).send("Producto eliminado correctamente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getProducts,
  postProduct,
  putProduct,
  deleteProduct,
};
