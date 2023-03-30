//Aca deberiamos de importar nuestros controllers
// **** CONTROLLERS ***
//Aca deberiamos de importar nuestros controllers
const getAllClients = require('../controllers/clients/getAllClients.js')

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getClients = async (req, res) => {
  const { id } = req.query;
  try {
    if (id) {
      //Si existe un cliente con ese nombre que devuelva unicamente a ese cliente
      const allClients = await getAllClients();
      const client = allClients.filter((ele) => ele.id === id)
      res.json(client);
    } else {
      //Funcion a llamar para traer todos los clientes
      const allClients = await getAllClients();
      res.json(allClients);
    }
  } catch (error) {
    res.status(400).json({ error: "Client Not Found" });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postClient = async (req, res) => {
  const { name, email, phone, vip, enable, saleman } = req.body;
  try {
    //Crear/Agregar nuevo cliente
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putClient = async (req, res) => {
  try {
    //
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//----------------------------------- HANDLERS DELETE -----------------------------------\\
const deleteClient = async (req, res) => {
  try {
    //
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getClients,
  postClient,
  putClient,
  deleteClient,
};
