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
      const jefe = { ...boss.dataValues }
      jefe.role = 'admin'
      res.status(200).json(jefe);
    } else {
      //Funcion a llamar para traer todos los productos
      const allBosses = await getAllBosses();
      const jefes = allBosses.map((b) => {
        const jefe = { ...b.dataValues }
        jefe.role = 'admin'
        return jefe
      })
      res.status(200).json(jefes);
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
    const jefe = { ...boss.dataValues }
    jefe.role = 'admin'
    res.status(200).send(jefe);
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
    const jefe = { ...response.dataValues }
    jefe.role = 'admin'
    res.status(200).send(jefe);
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
