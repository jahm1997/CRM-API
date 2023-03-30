//Aca deberiamos de importar nuestros controllers
// **** CONTROLLERS ***
//Aca deberiamos de importar nuestros controllers

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getSaleProducts = async (req, res) => {
  try {
    //Controller para obtener actividades
  } catch (error) {
    res.status(400).json({ error: "Activity Not Found" });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postSaleProduct = async (req, res) => {
  const { quantity_sale, price_sale, sale_id, product_id } = req.body;
  try {
    //Crear/Agregar nuevo cliente
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putSaleProduct = async (req, res) => {
  try {
    //
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//----------------------------------- HANDLERS DELETE -----------------------------------\\
const deleteSaleProduct = async (req, res) => {
  try {
    //
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getSaleProducts,
  postSaleProduct,
  putSaleProduct,
  deleteSaleProduct,
};
