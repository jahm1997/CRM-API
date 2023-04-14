const { Boss } = require("../../db.js");
const getBossById = require("./getBossById.js");
const fs = require("fs");
const uploadFile = require("../../firebase.js");

const updateBoss = async (data, path) => {
  //data={id,method,state,from,to,message,subject,attached,saleman_id,***sale_id}
  if (path) {
    const img = fs.readFileSync(path).buffer;
    const logo = await uploadFile(img, "boss");
    const dataAct = { ...data, logo };
    var id = dataAct.id;
    delete dataAct.id;
    var [resultado] = await Boss.update(dataAct, {
      where: {
        id,
      },
    });
  } else {
    const dataAct = { ...data };
    var id = dataAct.id;
    delete dataAct.id;
    var resultado = await Boss.update(dataAct, {
      where: {
        id,
      },
    });
  }

  if (resultado) {
    const boss = await getBossById(id);
    return {
      ...boss,
      role: "admin",
    };
  } else throw new Error("Failed to update, missing information");
};

module.exports = updateBoss;
