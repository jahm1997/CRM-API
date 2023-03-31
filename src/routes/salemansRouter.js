const { Router } = require("express");
const {
  getSalemans,
  postSaleman,
  putSaleman,
  deleteSaleman,
} = require("../handlers/salemansHandler");

const salemansRouter = Router();

salemansRouter.get("/salesmans", getSalemans);
salemansRouter.post("/salseman", postSaleman);
salemansRouter.put("/salseman", putSaleman);
salemansRouter.delete("/salesman", deleteSaleman);

module.exports = salemansRouter;
