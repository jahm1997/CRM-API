const findUser = require("../controllers/auth/findUser.js");

const loginUser = async (req, res) => {
  console.log(req.body);
  try {
    let response = await findUser(req.body);
    return res.json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
};
