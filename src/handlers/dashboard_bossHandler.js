//Aca deberiamos de importar nuestros controllers
// **** CONTROLLERS ***
//Aca deberiamos de importar nuestros controllers

const fgetDashboard_boss = require("../controllers/dashboard_boss/getDashboard_boss");

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getDashboard_boss = async (req, res) => {
  const { id } = req.query;
  try {
    const response = await fgetDashboard_boss(id);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getDashboard_boss };
