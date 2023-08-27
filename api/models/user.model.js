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
  avatar: {
    type: String,
  },
  address: {
    type: String,
  },
  // Chứa _id của user
  followers: {
    type: [Schema.Types.ObjectId],
  },
  // Ảnh bìa
  cover: {
    type: String,
  },
  // Mô tả
  bio: {
    type: String,
  },
  // Chứa _id của user
  blockUsers: {
    type: [Schema.Types.ObjectId],
  },
  setting: {
    canView: {
      type: String,
      enum:['ALL', 'FR'] // [All, friends]
    },
    canViewPost: {
      type: String,
      enum:['FLW','ALL'] // [follwers, all]
    }
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
