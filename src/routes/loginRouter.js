const { Router } = require("express");

const { loginUser } = require("../handlers/authHandler.js");

const loginRouter = Router();

//Rutas
loginRouter.get("/login", loginUser);

module.exports = loginRouter;
