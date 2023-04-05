//Aca deberiamos de importar nuestros controllers
// **** CONTROLLERS ***
//Aca deberiamos de importar nuestros controllers
const getTasks = require('../controllers/tasks/getTasks.js');
const createTask = require('../controllers/tasks/createTask.js');
const updateTask = require('../controllers/tasks/updateTask.js')


//----------------------------------- HANDLERS GETS -----------------------------------\\
const getTask = async (req, res) => {
  const { id } = req.query;
  try {
    const response = await getTasks(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postTask = async (req, res) => {
  const data = req.body;
  try {
    if (data.clientId && data.salesmanId) {
      const response = await createTask(data)
      res.status(200).json(response);
    } else {
      res.status(400).send("Falta relacionar una cliente y/o vendedor");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putTask = async (req, res) => {
  const data = req.body;
  try {
    const response = await updateTask(data);
    res.status(200).json(response);
  } catch (error) {
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
    getTask,
    postTask,
    putTask
};
