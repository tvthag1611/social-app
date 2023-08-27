import mongoose from "mongoose";

const { Schema } = mongoose

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: [true, "Title is required"],
    },
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: [true, "Author is required"],
    },
    image: {
        type: String,
        required: false,
    },
    content: {
        type: String,
        required: [true, "Content is required"],
    },
    hashtag: {
        type: String,
        required: false,
    },
    liked: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const PostModel = mongoose.model("posts", PostSchema);
export default PostModel;