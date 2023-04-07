const { Router } = require("express");
const { getBoss, postBoss, putBoss } = require("../handlers/bossHandler");

const validateBoss = require("../middlewares/validateBoss.js");

const bossRouter = Router();

bossRouter.get("/boss", getBoss);
bossRouter.post("/boss", validateBoss, postBoss);
bossRouter.put("/boss", putBoss);
// bossRouter.delete("/boss", deleteBoss);

module.exports = bossRouter;
