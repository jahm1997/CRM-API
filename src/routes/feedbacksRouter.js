const { Router } = require("express");
const {
  getFeedbacks,
  postFeedback,
  putFeedback,
  deleteFeedback,
} = require("../handlers/feedbackHandler");

const feedbacksRouter = Router();

feedbacksRouter.get("/feedbacks", getFeedbacks);
feedbacksRouter.post("/feedback", postFeedback);
feedbacksRouter.put("/feedback", putFeedback);
feedbacksRouter.delete("/feedback", deleteFeedback);

module.exports = feedbacksRouter;
