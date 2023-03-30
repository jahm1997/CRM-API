const { Router } = require("express");
const {
  getBoss,
  postBoss,
  putBoss,
  deleteBoss,
} = require("../handlers/bossHandler");

const bossRouter = Router();

bossRouter.get("/boss", getBoss);
bossRouter.post("/boss", postBoss);
bossRouter.put("/boss", putBoss);
bossRouter.delete("/boss", deleteBoss);

module.exports = bossRouter;
