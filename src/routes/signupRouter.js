const { Router } = require("express");
const { postUser } = require("../handlers/authHandler.js");

const signUpRouter = Router();

signUpRouter.post("/signUp", postUser);

module.exports = signUpRouter;
