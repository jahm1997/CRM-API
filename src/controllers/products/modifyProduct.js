const { Product } = require("../../db.js");
const getProductById = require("./getProductById.js");

const updateProduct = async (data) => {
  const dataAct = { ...data }
  const id = dataAct.id
  delete dataAct.id
  const [resultado] = await Product.update(dataAct, {
    where: {
      id,
    }
  })

  if (resultado) {
    const product = await getProductById(id)
    return product
  }
  else
    throw new Error('Failed to update, missing information')
}

module.exports = updateProduct;
