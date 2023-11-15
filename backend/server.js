import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import colors from "colors";
import connectDb from "./config/db.js";
import reviewRouter from "./routes/reviewRoutes.js";
import mailRouter from "./routes/mailRoutes.js";
import cors from "cors";
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
connectDb();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/mail", mailRouter);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(5500, () => {
  console.log("app is running");
});
