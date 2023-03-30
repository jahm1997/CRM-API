const { Router } = require("express");
const {
  getSalemans,
  postSaleman,
  putSaleman,
  deleteSaleman,
} = require("../handlers/salemansHandler");

const salemansRouter = Router();

salemansRouter.get("/salemans", getSalemans);
salemansRouter.post("/saleman", postSaleman);
salemansRouter.put("/saleman", putSaleman);
salemansRouter.delete("/saleman", deleteSaleman);

module.exports = salemansRouter;
