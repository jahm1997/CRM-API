//Aca deberiamos de importar nuestros controllers
// **** CONTROLLERS ***
//Aca deberiamos de importar nuestros controllers

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getFeedbacks = async (req, res) => {
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
const postFeedback = async (req, res) => {
  const { score, salesman } = req.body;
  try {
    //Crear/Agregar nuevo cliente
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putFeedback = async (req, res) => {
  try {
    //
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//----------------------------------- HANDLERS DELETE -----------------------------------\\
const deleteFeedback = async (req, res) => {
  try {
    //
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getFeedbacks,
  postFeedback,
  putFeedback,
  deleteFeedback,
};
