const { Router } = require("express");
const {
    getTask,
    postTask,
    putTask
} = require("../handlers/taskHandler");

const taskRouter = Router();

taskRouter.get("/task", getTask);
taskRouter.post("/task", postTask);
taskRouter.put("/task", putTask);
//activityRouter.delete("/activity", deleteActivity);

module.exports = taskRouter;
