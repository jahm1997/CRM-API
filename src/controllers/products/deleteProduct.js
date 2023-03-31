const { Product } = require("../../db.js");

module.exports = async ({ id }) => {
  await Product.destroy({
    where: {
      id,
    },
  });
};
