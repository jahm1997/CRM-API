const { Boss } = require('../../db.js');
const getBossById = require('./getBossById.js');

const updateBoss = async (data) => {
  //data={id,method,state,from,to,message,subject,attached,saleman_id,***sale_id}
  const dataAct = { ...data }
  const id = dataAct.id
  delete dataAct.id
  const [resultado] = await Boss.update(dataAct, {
    where: {
      id,
    }
  })

  if (resultado) {
    const boss = await getBossById(id)
    return boss
  }
  else
    throw new Error('Failed to update, missing information')
}

module.exports = updateBoss;