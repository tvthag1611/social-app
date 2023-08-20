import { Router } from "express";

import express from "express";
import {
  getMeController,
  loginController,
  registerController,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.post("/login", loginController);
authRouter.post("/register", registerController);
authRouter.get("/me", authMiddleware, getMeController);

export default authRouter;
