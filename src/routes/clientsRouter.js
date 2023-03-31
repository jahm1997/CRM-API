const { Router } = require("express");
const {
  getClients,
  postClient,
  putClient,
} = require("../handlers/clientsHandler");

const clientsRouter = Router();

clientsRouter.get("/client", getClients);
clientsRouter.post("/client", postClient);
clientsRouter.put("/client", putClient);

module.exports = clientsRouter;
