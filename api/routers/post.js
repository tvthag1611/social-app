import { Router } from "express";

const postRouter = Router();

postRouter.get("/", async (req, res) => {
    try {
        const data = await db
    } catch (error) {
        res.send(error)
    }
})

export default postRouter;