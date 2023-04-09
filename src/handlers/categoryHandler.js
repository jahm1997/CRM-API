const getAllCategory = require("../controllers/category/getAllCategory");

const getCategory = async (req, res) => {
  const data = req.query;
  try {
    let categories = await getAllCategory(data);
    res.status(200).send(categories);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getCategory };
