import CommentModel from "../models/comment.js";

export const CommentController = async (req, res) => {
    const { content, user, post } = req.body;
    try {
        const newComment = new CommentModel({
            content,
            user,
            post,
        });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
