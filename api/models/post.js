import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    content: {
        type: String,
    },
    like: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    hastag: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
    updateAt: {
        type: Date,
        default: Date.now(),
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
});

const PostModel = mongoose.model("posts", PostSchema);
export default PostModel;