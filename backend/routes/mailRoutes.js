import express from "express";
import { sendMail } from "../controllers/formController.js";
const router = express.Router();

router.post("/sendmail", sendMail);

export default router;
