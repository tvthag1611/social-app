import PostModel from "../models/post.model.js";

const createPost = async (req, res) => {
  const { title, image, content } = req.body;

  try {
    // 1. Add new post
    
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
