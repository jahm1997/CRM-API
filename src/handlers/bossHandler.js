//Aca deberiamos de importar nuestros controllers
// **** CONTROLLERS ***
//Aca deberiamos de importar nuestros controllers

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getBoss = async (req, res) => {
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
const postBoss = async (req, res) => {
  const {
    name,
    company,
    company_Description,
    DNI,
    address,
    email,
    phone,
    logo,
    enable,
  } = req.body;
  try {
    //Crear/Agregar nuevo cliente
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putBoss = async (req, res) => {
  const {
    name,
    company,
    company_Description,
    DNI,
    address,
    email,
    phone,
    logo,
    enable,
  } = req.body;
  try {
    //
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//----------------------------------- HANDLERS DELETE -----------------------------------\\
const deleteBoss = async (req, res) => {
  try {
    //
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getBoss,
  postBoss,
  putBoss,
  deleteBoss,
};
