const { Router } = require("express");
const {
  getFeedbacks,
  postFeedback
} = require("../handlers/feedbackHandler");

const feedbacksRouter = Router();

feedbacksRouter.get("/feedback", getFeedbacks);
feedbacksRouter.post("/feedback", postFeedback);

module.exports = feedbacksRouter;
