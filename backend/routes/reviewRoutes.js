import express from "express";
import {
  createReview,
  getAllReviews,
} from "../controllers/reviewController.js";

const router = express.Router();

router.get("/reviewList", getAllReviews);
router.post("/create", createReview);

export default router;
