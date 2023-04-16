//Aca deberiamos de importar nuestros controllers
// **** CONTROLLERS ***
//Aca deberiamos de importar nuestros controllers

const createActivities = require("../controllers/activities/createActivities");
const getActivities = require("../controllers/activities/getActivities");
const updateActivities = require("../controllers/activities/updateActivities");

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getActivity = async (req, res) => {
  const { id, clientId, salesmanId } = req.query;
  try {
    const response = await getActivities({ id, clientId, salesmanId });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postActivity = async (req, res) => {
  const data = req.body;
  //console.log(data);
  try {
    if (data.clientId && data.salesmanId) {
      const response = await createActivities(data);
      res.status(200).json(response);
    } else {
      res.status(400).send({ error: error.message });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putActivity = async (req, res) => {
  const data = req.body;
  try {
    const response = await updateActivities(data);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
//----------------------------------- HANDLERS DELETE -----------------------------------\\
/* const deleteActivity = async (req, res) => {
  try {
    //
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; */

module.exports = {
  getActivity,
  postActivity,
  putActivity,
};
