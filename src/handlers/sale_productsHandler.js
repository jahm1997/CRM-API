//Aca deberiamos de importar nuestros controllers
const getAllSaleProducts = require("../controllers/sale_products/getAllSaleProducts.js");
const createSaleProducts = require("../controllers/sale_products/createSaleProducts.js");
const updateSaleProducts = require("../controllers/sale_products/modifySaleProducts.js");
//Aca deberiamos de importar nuestros controllers

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getSaleProducts = async (req, res) => {
  try {
    const sale_products = await getAllSaleProducts();
    res.status(200).send(sale_products);
  } catch (error) {
    res.status(400).json({ error: "Activity Not Found" });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postSaleProduct = async (req, res) => {
  const { quantity_sale, price_sale, activityId, productId } = req.body;
  try {
    await createSaleProducts({
      quantity_sale,
      price_sale,
      activityId,
      productId,
    });
    res.status(200).send("Sale Product Created");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putSaleProduct = async (req, res) => {
  const { id, quantity_sale, price_sale } = req.body;
  try {
    await updateSaleProducts({ id, quantity_sale, price_sale });
    res.status(200).send("Actualizado correctamente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getSaleProducts,
  postSaleProduct,
  putSaleProduct,
};
