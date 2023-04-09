const { Router } = require("express");
const {
    getTask,
    postTask,
    putTask,
    deleteTask
} = require("../handlers/taskHandler");

const taskRouter = Router();

taskRouter.get("/task", getTask);
taskRouter.post("/task", postTask);
taskRouter.put("/task", putTask);
taskRouter.delete("/task", deleteTask);

module.exports = taskRouter;
