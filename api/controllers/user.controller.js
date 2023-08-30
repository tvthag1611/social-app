import UserModel from "../models/user.model.js";

export const uploadAvatarController = (req, res) => {
  console.log(req.file);
  res.send("Abc");
};

const createUser = async (req, res) => {
  try {
    const {
      email,
      password,
      fullname,
      avatar,
      address,
      followers,
      cover,
      bio,
      blockUsers,
      setting,
    } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const model = new UserModel({
      email,
      password: hashedPassword,
      fullname,
      avatar,
      address,
      followers,
      cover,
      bio,
      blockUsers,
      setting,
    });

    const result = await model.save();
    res.status(201).json({
      user: result,
      message: "Create new user successfully",
    });
  } catch (error) {
    console.log(error.errors);
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const {
      email,
      password,
      fullname,
      avatar,
      address,
      followers,
      cover,
      bio,
      blockUsers,
      setting,
    } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const result = await UserModel.findOneAndUpdate(
      { email },
      {
        password: hashedPassword,
        fullname,
        avatar,
        address,
        followers,
        cover,
        bio,
        blockUsers,
        setting,
      }
    );

    if (!result) throw new Error("Unsuccessfully");

    res.status(201).json({
      user: {
        email,
        password,
        fullname,
        avatar,
        address,
        followers,
        cover,
        bio,
        blockUsers,
        setting,
      },
      message: "Update new user successfully",
    });
  } catch (error) {
    console.log(error.errors);
    res.status(500).json(error);
  }
};

const getAll = async (req, res) => {
  try {
    const result = await UserModel.find({});
    res.status(200).json({
      users: result,
      message: "Successfully",
    });
  } catch (error) {
    console.log(error.errors);
    res.status(500).json(error);
  }
};

const getById = async (req, res) => {
  try {
    const id = req.query["id"];

    const result = await UserModel.findOne({ _id: id });
    res.status(200).json({
      user: result,
      message: "Successfully",
    });
  } catch (error) {
    console.log(error.errors);
    res.status(500).json(error);
  }
};

export { createUser, getAll, getById, updateUser };
