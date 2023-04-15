const { Router } = require("express");

const { loginUser, validateUser } = require("../handlers/authHandler.js");

const loginRouter = Router();

//Rutas
loginRouter.post("/login", loginUser);
loginRouter.post("/validation", validateUser);

module.exports = loginRouter;
