//Aca deberiamos de importar nuestros controllers
// **** CONTROLLERS ***
//Aca deberiamos de importar nuestros controllers

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getProducts = async (req, res) => {
  const { id } = req.query;
  try {
    if (id) {
      //Si existe el producto con ese id que devuelva unicamente a ese producto
    } else {
      //Funcion a llamar para traer todos los productos
    }
  } catch (error) {
    res.status(400).json({ error: "Product Not Found" });
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
    boss,
  } = req.body;
  try {
    //Crear/Agregar nuevo cliente
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putProduct = async (req, res) => {
  try {
    //
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//----------------------------------- HANDLERS DELETE -----------------------------------\\
const deleteProduct = async (req, res) => {
  try {
    //
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
