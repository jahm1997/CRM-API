const { Router } = require("express");
const {
  getSalemans,
  postSaleman,
  putSaleman,
} = require("../handlers/salemansHandler");

const salemansRouter = Router();

salemansRouter.get("/salesman", getSalemans);
salemansRouter.post("/salesman", postSaleman);
salemansRouter.put("/salesman", putSaleman);

module.exports = salemansRouter;
