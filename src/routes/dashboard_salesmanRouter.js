const { Router } = require("express");
const { getDashboard_salesman } = require("../handlers/dashboard_salesmanHandler");

const dashboard_salesmanRouter = Router();

dashboard_salesmanRouter.get("/dashboard_salesman", getDashboard_salesman);

module.exports = dashboard_salesmanRouter;