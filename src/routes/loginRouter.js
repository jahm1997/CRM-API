const { Router } = require("express");

const { loginUser } = require("../handlers/authHandler.js");

const loginRouter = Router();

//Rutas
loginRouter.post("/login", loginUser);

module.exports = loginRouter;
