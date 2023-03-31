//Aca deberiamos de importar nuestros controllers
// **** CONTROLLERS ***
//Aca deberiamos de importar nuestros controllers
const createBoss = require('../controllers/Bosses/CreateBoss.js');
const getAllBosses = require('../controllers/Bosses/getAllBosses.js');
const updateBoss = require('../controllers/Bosses/updateBoss.js');

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getBoss = async (req, res) => {
  const { id } = req.query;
  try {
    if (id) {
      //Si existe el producto con ese id que devuelva unicamente a ese producto
      const allBosses = await getAllBosses();
      const boss = allBosses.filter((ele) => ele.id === id);
      res.status(200).json(boss)
    } else {
      //Funcion a llamar para traer todos los productos
      const allBosses = await getAllBosses();
      res.status(200).json(allBosses)
    }
  } catch (error) {
    res.status(400).json({ error: "Product Not Found" });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postBoss = async (req, res) => {
  const {
    name,
    company,
    company_description,
    commercial_register,
    address,
    email,
    phone,
    logo,
    enable,
  } = req.body;
  try {
    //Crear/Agregar nuevo cliente
    await createBoss({
      name,
      company,
      company_description,
      commercial_register,
      address,
      email,
      phone,
      logo,
      enable,
    })
    res.status(200).send('Nuevo jefe agregado correctamente.')
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putBoss = async (req, res) => {
  const {
    id,
    name,
    company,
    company_description,
    commercial_register,
    address,
    email,
    phone,
    logo,
    enable,
  } = req.body;
  try {
    //
    updateBoss({
      id,
      name,
      company,
      company_description,
      commercial_register,
      address,
      email,
      phone,
      logo,
      enable,
    });
    res.status(200).send('Jefe actualizado');
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
