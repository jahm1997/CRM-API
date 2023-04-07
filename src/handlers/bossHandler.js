//Aca deberiamos de importar nuestros controllers
// **** CONTROLLERS ***
//Aca deberiamos de importar nuestros controllers
const createBoss = require("../controllers/Bosses/CreateBoss.js");
const getAllBosses = require("../controllers/Bosses/getAllBosses.js");
const getBossById = require("../controllers/Bosses/getBossById.js");
const updateBoss = require("../controllers/Bosses/updateBoss.js");

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getBoss = async (req, res) => {
  const { id } = req.query;
  try {
    if (id) {
      //Si existe el producto con ese id que devuelva unicamente a ese producto
      const boss = await getBossById(id);
      res.status(200).json(boss);
    } else {
      //Funcion a llamar para traer todos los productos
      const allBosses = await getAllBosses();
      res.status(200).json(allBosses);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postBoss = async (req, res) => {
  const data = req.body;
  try {
    //Crear/Agregar nuevo cliente
    let boss = await createBoss(data);
    res.status(200).send(boss);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putBoss = async (req, res) => {
  const data = req.body;
  try {
    //
    const response = await updateBoss(data);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//----------------------------------- HANDLERS DELETE -----------------------------------\\
// const deleteBoss = async (req, res) => {
//   try {
//     //
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

module.exports = {
  getBoss,
  postBoss,
  putBoss,
  // deleteBoss,
};
