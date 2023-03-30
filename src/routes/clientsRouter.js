const { Router } = require("express");
const {
  getClients,
  postClient,
  putClient,
  deleteClient,
} = require("../handlers/clientsHandler");

const clientsRouter = Router();

clientsRouter.get("/clients", getClients);
clientsRouter.post("/client", postClient);
clientsRouter.put("/client", putClient);
clientsRouter.delete("/client", deleteClient);

module.exports = clientsRouter;
