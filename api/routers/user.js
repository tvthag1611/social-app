import { Router } from "express";
import { uploadFile } from "../configs/multer.config.js";
import {
  createUser,
  getAll,
  getById,
  updateUser,
  uploadAvatarController,
  updateInfo,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.post("/upload", uploadFile.single("avatar"), uploadAvatarController);
userRouter.post("/create", createUser);
userRouter.post("/update", updateUser);
userRouter.put("/update/info", authMiddleware, updateInfo);
userRouter.get("/getall", getAll);
userRouter.get("/getbyid", getById);

export default userRouter;
