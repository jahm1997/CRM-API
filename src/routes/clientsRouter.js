const { Router } = require("express");
const {
  getClients,
  postClient,
  putClient,
} = require("../handlers/clientsHandler");

const clientsRouter = Router();

clientsRouter.get("/clients", getClients);
clientsRouter.post("/client", postClient);
clientsRouter.put("/client", putClient);

module.exports = clientsRouter;
