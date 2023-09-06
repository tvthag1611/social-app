import { Router } from "express";
import PostController from "../controllers/post.controller.js";

const postRouter = Router();

postRouter.get("/all", PostController.getAllPosts);
postRouter.get("/owners", PostController.getAllOwnerPosts)
postRouter.post("/", PostController.create);
postRouter.put("/:id", PostController.update);
postRouter.delete("/:id", PostController.remove);

export default postRouter;