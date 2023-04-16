//Aca deberiamos de importar nuestros controllers
const createSalesman = require("../controllers/salesman/createSalesman");
const getAllSalesman = require("../controllers/salesman/getAllSalesman");
const modifySalesman = require("../controllers/salesman/modifySalesman");
//Aca deberiamos de importar nuestros controllers

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getSalemans = async (req, res) => {
  try {
    const response = await getAllSalesman(req.query);
    res.status(200).json(response);
  } catch (error) {
    console.log("Error en salesmanhandler", error);
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postSaleman = async (req, res) => {
  const data = JSON.parse(req.body.sellerData);
  //comente lo de arriba y cambie por lo de abajo
  // const data = req.body;
  try {
    if (data.bossId) {
      if (req.file) {
        var response = await createSalesman(data, req.file.path);
      } else {
        var response = await createSalesman(data);
      }
      res.status(201).json(response);
    } else {
      res.status(400).send("No ha relacionado a ningun Jefe");
    }
  } catch (error) {
    console.log("Error en salesmanhandler", error);
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putSaleman = async (req, res) => {
  const data = JSON.parse(req.body.sellerData);
  console.log(data);
  try {
    if (req.file) {
      var response = await modifySalesman(data, req.file.path);
    } else {
      var response = await modifySalesman(data);
    }
    res.status(200).send(response);
  } catch (error) {
    console.log("Error en salesmanhandler", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getSalemans,
  postSaleman,
  putSaleman,
};
