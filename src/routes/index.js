const { Router } = require("express");
// Importar todos los routers;
const loginRouter = require("./loginRouter.js");
const bossRouter = require("./bossRouter.js");
const clientsRouter = require("./clientsRouter.js");
const activityRouter = require("./activityRouter.js");
const productsRouter = require("./productsRouter.js");
const salemans = require("./salemansRouter.js");
const feedbacks = require("./feedbacksRouter.js");
const sale_productsRouter = require("./sale_productsRouter.js");
const taskRouter = require("./TaskRouter.js");
const categoryRouter = require("./categoryRouter.js");
const dashboard_salesmanRouter = require("./dashboard_salesmanRouter.js");
const dashboard_bossRouter = require("./dashboard_bossRouter.js");
const paymentRouter = require('./paymentRouter.js');

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
router.use("/", taskRouter);
router.use("/", categoryRouter);
router.use("/", dashboard_salesmanRouter);
router.use("/", loginRouter);
router.use("/", dashboard_bossRouter);
router.use('/', paymentRouter);

module.exports = router;
