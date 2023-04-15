const { Salesman, Client, Task } = require("../../db.js");
const { sendMail } = require("../email/notifyActivityExpiration.js");

const fu = async () => {
  let tasks = await Task.findAll();
  let values = await tasks.map((task) => task.dataValues);
  return values;
};

module.exports = async () => {
  try {
    let dateToday = new Date();
    let day = dateToday.getDate().toString().padStart(2, "0"); // Obtener día como cadena con dos dígitos
    let month = (dateToday.getMonth() + 1).toString().padStart(2, "0"); // Obtener mes como cadena con dos dígitos
    let year = dateToday.getFullYear().toString(); // Obtener año como cadena
    let dateArray = [year, month, day];
    let date = dateArray.join("-"); // Unir la fecha como cadena usando el guión como separador

    let info = await fu();
    let data = info.map((i) => {
      return {
        id: i.id,
        state: i.state,
        description: i.description,
        due_date: new Date(i.due_date).toISOString().slice(0, 10),
        clientId: i.clientId,
        salesmanId: i.salesmanId,
      };
    });
    // console.log(date.slice(0, 4));
    // console.log(date.slice(5, 7));
    // console.log(date.slice(8, 10));
    // console.log(data[0].due_date);
    let task = [];
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].state === "Pendiente" &&
        data[i].due_date.slice(0, 4) == date.slice(0, 4) &&
        data[i].due_date.slice(5, 7) == date.slice(5, 7) &&
        data[i].due_date.slice(8, 10) - date.slice(8, 10) >= 1 &&
        data[i].due_date.slice(8, 10) - date.slice(8, 10) <= 2
      ) {
        task.push(data[i]);
      }
    }

    let salesman = {};
    let client = {};
    for (let i = 0; i < task.length; i++) {
      if (
        task[i].due_date.slice(0, 4) == date.slice(0, 4) &&
        task[i].due_date.slice(5, 7) == date.slice(5, 7) &&
        data[i].due_date.slice(8, 10) - date.slice(8, 10) >= 1 &&
        data[i].due_date.slice(8, 10) - date.slice(8, 10) <= 2
      ) {
        salesman = (await Salesman.findByPk(task[i].salesmanId)).dataValues;
        client = (await Client.findByPk(task[i].clientId)).dataValues;

        sendMail(
          salesman,
          client,
          task[i],
          (time = task[i].due_date.slice(8, 10) - date.slice(8, 10))
        );
      }
      salesman = {};
      client = {};
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
