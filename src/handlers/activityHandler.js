//Aca deberiamos de importar nuestros controllers
// **** CONTROLLERS ***
//Aca deberiamos de importar nuestros controllers

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getActivity = async (req, res) => {
  try {
    //Controller para obtener actividades
  } catch (error) {
    res.status(400).json({ error: "Activity Not Found" });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postActivity = async (req, res) => {
  const {
    method,
    state,
    timestamp,
    from,
    to,
    message,
    subject,
    attached,
    sale_id,
    client_id,
    saleman_id,
  } = req.body;
  try {
    //Crear/Agregar nuevo cliente
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putActivity = async (req, res) => {
  try {
    //
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//----------------------------------- HANDLERS DELETE -----------------------------------\\
const deleteActivity = async (req, res) => {
  try {
    //
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getActivity,
  postActivity,
  putActivity,
  deleteActivity,
};
