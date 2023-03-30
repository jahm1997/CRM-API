require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const activity = require("./models/activity");
const boss = require("./models/boss");
const client = require("./models/client");
const feedback = require("./models/feedback");
const product = require("./models/product");
const saleProduct = require("./models/saleProduct");
const salesman = require("./models/salesman");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
// const { Dog } = sequelize.models;
const { Activity, Boss, Client, Feedback, Product, Sale_product, Salesman } =
  sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

// boss(sequelize);
// salesman(sequelize);
// product(sequelize);
// client(sequelize);
// feedback(sequelize);
// activity(sequelize);
// saleProduct(sequelize);

// console.log("DataBase Model = ", sequelize.models);

//vendedor-feedback

Client.belongsToMany(Salesman, { through: Activity });
Salesman.belongsToMany(Client, { through: Activity });

Activity.belongsToMany(Product, { through: Sale_product });
Product.belongsToMany(Activity, { through: Sale_product });

Salesman.hasOne(Client, { through: Salesman });

Boss.hasOne(Salesman, { through: Boss });

Boss.hasOne(Product, { through: Boss });

Salesman.hasOne(Feedback, { through: Salesman });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
