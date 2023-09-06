import { Router } from "express";
import authRouter from "./auth.js";
import userRouter from "./user.js";
import postRouter from "./post.js";

const apiRouter = Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/users", userRouter);
apiRouter.use("/posts", postRouter);

export default apiRouter;
