//Aca deberiamos de importar nuestros controllers
const createSalesman = require("../controllers/salesman/createSalesman");
const getAllSalesman = require("../controllers/salesman/getAllSalesman");
const modifySalesman = require("../controllers/salesman/modifySalesman");
//Aca deberiamos de importar nuestros controllers

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getSalemans = async (req, res) => {
  const { id, name, address, email, phone, enable } = req.query;
  console.log(req.query);
  try {
    if (id || name || address || email || phone || enable) {
      const variable = id || name || address || email || phone || enable;
      const propiedad = Object.keys(req.query)[0];
      const allSalesman = await getAllSalesman();
      const salesman = allSalesman.filter((ele) => ele[propiedad] == variable);
      res.json(salesman);
      // res.send('hola tengo id')
    } else {
      //Funcion a llamar para traer todos los clientes
      // res.send("Hola soy client");
      const allSalesman = await getAllSalesman();
      res.json(allSalesman);
    }
  } catch (error) {
    res.status(400).json({ error: "Salesman Not Found" });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postSaleman = async (req, res) => {
  const data = req.body;
  try {
    if (data.bossId) {
      const response = await createSalesman(data);
      res.status(201).json(response);
    } else {
      res.status(400).send("No ha relacionado a ningun Jefe");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putSaleman = async (req, res) => {
  const body = req.body;
  try {
    modifySalesman(body);
    res.status(200).send(body);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getSalemans,
  postSaleman,
  putSaleman,
};
