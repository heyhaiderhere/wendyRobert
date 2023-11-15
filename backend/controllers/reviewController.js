import asyncHandler from "express-async-handler";
import Review from "../models/Review.js";

const createReview = asyncHandler(async (req, res) => {
  const review = req.body;
  const returnedReview = await Review.create(review);
  if (returnedReview) {
    res.json(returnedReview).status(200);
  }
});
const getAllReviews = asyncHandler(async (req, res) => {
  const returnedReviews = await Review.find({});
  if (returnedReviews) {
    res.json(returnedReviews).status(200);
  }
});

export { createReview, getAllReviews };
