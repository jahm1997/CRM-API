const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

require("./db.js");

const server = express();

server.name = "API";

/* const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept'],
  credentials: true,
  preflightContinue: true
}; */

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  // cors({
  //   origin: 'http://localhost:3000',
  //   methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  //   allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept'],
  //   credentials: true,
  //   preflightContinue: true
  // })

  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Expose-Header", "Set-Cookie");
  next();
});
// server.options('*', cors(corsOptions));

// server.use(cors(corsOptions));

server.set("src", path.join(__dirname, "src"));
server.set("src engine", "ejs");

// const storage = multer.diskStorage({
//   destination: path.join(__dirname, "./public/images"),
//   filename: function (req, file, cb) {
//     cb(null, req.body.name + "-" + file.originalname);
//   },
// });

server.use(
  multer({
    // storage,
    dest: path.join(__dirname, "./public/images"),
    fileFilter: function (req, file, cb) {
      const filetype = /jpeg|jpg|png|gif/;
      const mimetype = filetype.test(file.mimetype);
      const extname = filetype.test(path.extname(file.originalname));
      if (mimetype && extname) {
        return cb(null, true);
      }
      cb("Error, Archivo debe ser un formato de imagen valido");
    },
  }).single("image")
);

server.use("/api", require("./routes"));

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message + " " + Date.now() || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
