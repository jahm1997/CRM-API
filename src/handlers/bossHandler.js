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
      const boss = await getBossById(id);
      res.status(200).json(boss);
    } else {
      const allBosses = await getAllBosses();
      res.status(200).json(allBosses);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postBoss = async (req, res) => {
  //data={name,username,email,password}
  const data = JSON.parse(req.body.productData); //ALERT!!!!

  try {
    if (req.file.path) {
      var boss = await createBoss(data, req.file.path);
    } else {
      var boss = await createBoss(data);
    }
    res.status(200).send(boss);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putBoss = async (req, res) => {
  const data = JSON.parse(req.body.productData); //ALERT!!!!!
  try {
    if (req.file.path) {
      var response = await updateBoss(data, req.file.path);
    } else {
      var response = await updateBoss(data);
    }
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
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
