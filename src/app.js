const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const multer = require("multer");
const path = require("path");

require("./db.js");

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.set("src", path.join(__dirname, "src"));
server.set("src engine", "ejs");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "./public/images"),
  filename: function (req, file, cb) {
    cb(null, req.body.name + "-" + file.originalname);
  },
});

server.use(
  multer({
    storage,
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
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
