//Aca deberiamos de importar nuestros controllers
// **** CONTROLLERS ***
//Aca deberiamos de importar nuestros controllers

const createFeedback = require("../controllers/feedbacks/createFeedback");
const getFeedback = require("../controllers/feedbacks/getFeedback");

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getFeedbacks = async (req, res) => {
  //se espera uno de los 2 valores
  const { id, salesmanId } = req.query;
  try {
    const response = await getFeedback({ id, salesmanId })
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postFeedback = async (req, res) => {
  const { score, salesmanId } = req.body;
  try {
    const response = await createFeedback({ score, salesmanId })
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  getFeedbacks,
  postFeedback
};
