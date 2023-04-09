//Aca deberiamos de importar nuestros controllers
// **** CONTROLLERS ***
//Aca deberiamos de importar nuestros controllers

const fgetDashboard_salesman = require("../controllers/dashboard_salesman/getDashboard_salesman");

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getDashboard_salesman = async (req, res) => {
  const { id } = req.query;
  try {
    const response = await fgetDashboard_salesman(id);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getDashboard_salesman };
