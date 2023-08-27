import { Router } from "express";
import { uploadFile } from "../configs/multer.config.js";
import { uploadAvatarController } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/upload", uploadFile.single("avatar"), uploadAvatarController);

export default userRouter;
