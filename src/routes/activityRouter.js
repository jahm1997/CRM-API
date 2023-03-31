const { Router } = require("express");
const {
  getActivity,
  postActivity,
  putActivity,
} = require("../handlers/activityHandler");

const activityRouter = Router();

activityRouter.get("/activity", getActivity);
activityRouter.post("/activity", postActivity);
activityRouter.put("/activity", putActivity);
//activityRouter.delete("/activity", deleteActivity);

module.exports = activityRouter;
