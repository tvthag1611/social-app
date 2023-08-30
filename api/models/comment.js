import mongoose from "mongoose";

const { Schema } = mongoose;

const CommentSchema = new Schema({
    content: {
        type: String,
        required: [true, "Content is required"],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "posts",
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const CommentModel = mongoose.model("comments", CommentSchema);
export default CommentModel;