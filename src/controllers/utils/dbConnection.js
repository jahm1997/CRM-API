require("dotenv").config();
const { Sequelize } = require("sequelize");
const dbFill = require("./dbFill");
const saleProduct = require("../../models/saleProduct");
const activity = require("../../models/activity");
const client = require("../../models/client");
const salesman = require("../../models/salesman");
const product = require("../../models/product");
const boss = require("../../models/boss");
const relationships = require("./relationships");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, PORT } = process.env;
// console.log(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${DB_NAME}`);
const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
    force: false,
  }
);

boss(database);
salesman(database);
client(database);
activity(database);
product(database);
saleProduct(database);

relationships(database);

dbFill(database.models)
  .then(() => {
    console.log(
      "Se ha llenado la base de datos"
    );
  });

database.sync().then(() => { console.log('Fin del proceso'); })