//Aca deberiamos de importar nuestros controllers
// **** CONTROLLERS ***
//Aca deberiamos de importar nuestros controllers
const getAllClients = require("../controllers/clients/getAllClients.js");
const getClientById = require("../controllers/clients/getClientById.js");
const updateClient = require("../controllers/clients/putClient.js");
const createClient = require("../controllers/clients/createClient.js");
//----------------------------------- HANDLERS GETS -----------------------------------\\
const getClients = async (req, res) => {
  const { id, salesmanId, bossId } = req.query;
  try {
    if (id) {
      const resultado = await getClientById(id);
      res.json(resultado);
    } else {
      const resultadoFinal = await getAllClients({ salesmanId, bossId });
      res.json(resultadoFinal);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postClient = async (req, res) => {
  const data = req.body;
  try {
    if (data.salesmanId) {
      const response = await createClient(data);
      res.status(201).json(response);
    } else {
      res.status(400).send("No ha relacionado a ningun Vendedor");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putClient = async (req, res) => {
  const data = req.body;
  try {
    const response = await updateClient(data);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getClients,
  postClient,
  putClient,
};
