import { Router } from "express";
import { uploadFile } from "../configs/multer.config.js";
import {
  createUser,
  getAll,
  getById,
  updateUser,
  uploadAvatarController,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/upload", uploadFile.single("avatar"), uploadAvatarController);
userRouter.post("/create", createUser);
userRouter.post("/update", updateUser);
userRouter.get("/getall", getAll);
userRouter.get("/getbyid", getById);

export default userRouter;
