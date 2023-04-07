//Aca deberiamos de importar nuestros controllers
const createSalesman = require("../controllers/salesman/createSalesman");
const getAllSalesman = require("../controllers/salesman/getAllSalesman");
const modifySalesman = require("../controllers/salesman/modifySalesman");
//Aca deberiamos de importar nuestros controllers

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getSalemans = async (req, res) => {
  const data = req.query;
  try {
    const response = await getAllSalesman(data);
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ error: error.message });
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
    const response = await modifySalesman(body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getSalemans,
  postSaleman,
  putSaleman,
};
