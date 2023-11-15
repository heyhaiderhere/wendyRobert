import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  reviewTitle: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("reviews", reviewSchema);

export default Review;
