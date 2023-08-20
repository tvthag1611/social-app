import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  fullname: {
    type: String,
    required: [true, "Fullname is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
