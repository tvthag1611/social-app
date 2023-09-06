import PostModel from "../models/post.js";
import UserModel from "../models/user.js";

const PostController = {
    getAllPosts: async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const size = parseInt(req.query.size) || 3;
        const skip = (page - 1) * size;

        try {
            const posts = await PostModel.find().skip(skip).limit(size);
            const totalPosts = await PostModel.countDocuments();
            const totalPages = Math.ceil(totalPosts / size);

            res.send({
                data: posts,
                totalPages: totalPages,
                currentPage: page,
            });
        } catch (error) {
            res.status(500).send({ error: "Internal server error" });
        }
    },

    getAllOwnerPosts: async (req, res) => {
        const userId = req.user.id;

        try {
            const userPosts = await PostModel.find({ user: userId });

            res.send({
                data: userPosts,
            });
        } catch (error) {
            res.status(500).send({ error: "Internal server error" });
        }
    },

    create: async (req, res) => {
        const { title, image, content, hashtag } = req.body;
        const userId = req.user.id;

        try {
            const currentUser = await UserModel.findById(userId);

            if (!currentUser) {
                res.status(404).send({ error: "User not found" });
                return;
            }

            const newPost = new PostModel({
                title,
                image,
                content,
                hashtag,
                user: userId,
            });

            await newPost.save();

            res.status(201).send({
                data: newPost,
                message: "Created new post successfully",
            });
        } catch (error) {
            res.status(500).send({ error: "Internal server error" });
        }
    },

    update: async (req, res) => {
        const { title, image, content, hashtag } = req.body;
        const postId = req.params.id;
        const userId = req.user.id;

        try {
            const currentUser = await UserModel.findById(userId);

            if (!currentUser) {
                res.status(404).send({ error: "User not found" });
                return;
            }

            const updatedPost = await PostModel.findByIdAndUpdate(
                postId,
                { title, image, content, hashtag },
                { new: true }
            );

            if (!updatedPost) {
                res.status(404).send({ error: "Post not found" });
                return;
            }

            res.send({
                data: updatedPost,
                message: "Updated post successfully",
            });
        } catch (error) {
            res.status(500).send({ error: "Internal server error" });
        }
    },

    remove: async (req, res) => {
        const postId = req.params.id;
        const userId = req.user.id;

        try {
            const currentUser = await UserModel.findById(userId);

            if (!currentUser) {
                res.status(404).send({ error: "User not found" });
                return;
            }

            const deletedPost = await PostModel.findByIdAndDelete(postId);

            if (!deletedPost) {
                res.status(404).send({ error: "Post not found" });
                return;
            }

            res.send({
                data: deletedPost,
                message: "Deleted post successfully",
            });
        } catch (error) {
            res.status(500).send({ error: "Internal server error" });
        }
    },
};

export default PostController;