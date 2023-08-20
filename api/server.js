import "dotenv/config";
import express from "express";
import { connectDb } from "./configs/db.config.js";
import apiRouter from "./routers/index.js";
import cors from "cors";

const app = express();

const PORT = 8000;
connectDb();
app.use(express.json());
app.use(cors());
app.use("/api/v1", apiRouter);

app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});
