const { Router } = require("express");
// Importar todos los routers;
const bossRouter = require("./bossRouter.js");
const clientsRouter = require("./clientsRouter.js");
const activityRouter = require("./activityRouter.js");
const productsRouter = require("./productsRouter.js");
const salemans = require("./salemansRouter.js");
const feedbacks = require("./feedbacksRouter.js");
const sale_productsRouter = require("./sale_productsRouter.js");

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", bossRouter);
router.use("/", salemans);
router.use("/", clientsRouter);
router.use("/", activityRouter);
router.use("/", productsRouter);
router.use("/", feedbacks);
router.use("/", sale_productsRouter);

module.exports = router;
