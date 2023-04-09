const findUser = require("../controllers/auth/findUser.js");

const loginUser = async (req, res) => {
  const { name, username, email, password, status } = req.body;
  try {
    let exist = await findUser({ name, username, email, password, status });
    res.status(200).json(exist);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
};
