//Aca deberiamos de importar nuestros controllers
const getTasks = require("../controllers/tasks/getTasks.js");
const createTask = require("../controllers/tasks/createTask.js");
const updateTask = require("../controllers/tasks/updateTask.js");
const fdeleteTask = require("../controllers/tasks/deleteTask.js");
//Aca deberiamos de importar nuestros controllers

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getTask = async (req, res) => {
  const { id, clientId, salesmanId } = req.query;
  try {
    const response = await getTasks({ id, clientId, salesmanId });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postTask = async (req, res) => {
  const data = req.body;
  try {
    if (data.clientId && data.salesmanId) {
      const response = await createTask(data);
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
const putTask = async (req, res) => {
  const data = req.body;
  try {
    const response = await updateTask(data);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
//----------------------------------- HANDLERS DELETE -----------------------------------\\
const deleteTask = async (req, res) => {
  const { id } = req.query;
  try {
    const response = await fdeleteTask(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTask,
  postTask,
  putTask,
  deleteTask,
};
