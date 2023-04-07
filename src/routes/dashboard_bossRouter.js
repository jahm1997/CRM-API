const { Router } = require("express");
const { getDashboard_boss } = require("../handlers/dashboard_bossHandler");

const dashboard_bossRouter = Router();

dashboard_bossRouter.get("/dashboard_boss", getDashboard_boss);

module.exports = dashboard_bossRouter;