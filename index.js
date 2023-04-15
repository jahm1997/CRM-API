//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
require("dotenv").config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const cron = require("node-cron");
const notifyTask = require("./src/controllers/tasks/notifyTask.js");

cron.schedule("0 9 * * *", () => {
  // SI COLOCAMOS * * * * * * se enviarian cada un segundo
  // TODOS LOS DIAS A LAS 9 de la mañana
  notifyTask();
});

const port = process.env.PORT || 6972;
// const port = 3000;

// Syncing all the models at once.
conn.sync().then(() => {
  server.listen(port, () => {
    console.log("--> 👌 Server Online in port " + port); // eslint-disable-line no-console
  });
});
