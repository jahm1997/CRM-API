const { Router } = require("express");
const {
  getCategory,
} = require("../handlers/categoryHandler");

const categoryRouter = Router();

categoryRouter.get("/category", getCategory);

module.exports = categoryRouter;
