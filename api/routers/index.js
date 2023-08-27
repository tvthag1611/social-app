import { Router } from "express";
import authRouter from "./auth.js";
import userRouter from "./user.js";

const apiRouter = Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/users", userRouter);

export default apiRouter;
