//Aca deberiamos de importar nuestros controllers
// **** CONTROLLERS ***
//Aca deberiamos de importar nuestros controllers
const getAllClients = require("../controllers/clients/getAllClients.js");
const updateClient = require("../controllers/clients/putClient.js");
const createClient = require("../controllers/clients/createClient.js");
const statusNegotiation = require("../controllers/clients/statusNegotiation.js");
const totalPurchased = require("../controllers/clients/totalPurchased.js");
//----------------------------------- HANDLERS GETS -----------------------------------\\
const getClients = async (req, res) => {
  const { id } = req.query;
  try {
    if (id) {
      //Si existe un cliente con ese nombre que devuelva unicamente a ese cliente
      const allClients = await getAllClients();
      const client = allClients.filter((ele) => ele.id === id);

      let estado = await statusNegotiation({ id });
      let total = await totalPurchased({ id });
      if (estado == null) {
        estado = { state: "Pendiente" };
      }
      let resultado = {
        ...client[0].dataValues,
        status: estado.state,
        totalPurchased: total,
      };

      res.json(resultado);
      // res.send('hola tengo id')
    } else {
      //Funcion a llamar para traer todos los clientes
      // res.send("Hola soy client");
      const allClients = await getAllClients();

      let resultadoFinal = await Promise.all(
        allClients.map(async (c) => {
          let estado = await statusNegotiation({ id: c.dataValues.id });
          if (estado == null) {
            estado = { state: "Pendiente" };
          }
          return {
            ...c.dataValues,
            status: estado.state,
            totalPurchased: await totalPurchased({ id: c.dataValues.id }),
          };
        })
      );
      // res.json(allClients);
      res.json(resultadoFinal);
    }
  } catch (error) {
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
