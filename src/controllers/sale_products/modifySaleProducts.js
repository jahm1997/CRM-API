const { Sale_product } = require("../../db.js");
const getSaleProducts = require("./getSaleProducts.js");


module.exports = async (data) => {
  const dataAct = { ...data }
  const id = dataAct.id
  delete dataAct.id
  const [resultado] = await Sale_product.update(dataAct, {
    where: {
      id,
    }
  })

  if (resultado) {
    const sale_product = await getSaleProducts({ id })
    return sale_product
  }
  else
    throw new Error('Failed to update, missing information')
}


