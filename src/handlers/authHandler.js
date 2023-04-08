const findUser = require("../controllers/auth/findUser.js");

const loginUser = async (req, res) => {
  const { name, username, email, password } = req.body;
  try {
    let exist = await findUser({ name, username, email, password });
    res.status(200).json(exist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser
};
