const createSalesman = require("../controllers/salesman/createSalesman.js");
const findUser = require("../controllers/auth/findUser.js");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let exist = await findUser({ email, password });
    res.status(200).json(exist);
  } catch (error) {
    res.status(400).json({ status: false });
  }
};

const postUser = async (req, res) => {
  const data = req.body;
  try {
    let saleman = await createSalesman(data);
    res.status(200).json(saleman);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  postUser,
};
