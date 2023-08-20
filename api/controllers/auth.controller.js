import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    //   1. Validation
    if (!email || !password) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    //   2. Check authentication
    const existingUser = await UserModel.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({
        message: "Invalid credentials!",
      });
    }

    // 3. Check password
    const isMatchPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isMatchPassword) {
      return res.status(401).json({
        message: "Username or password is not correct!",
      });
    }

    // Create JWT Token & Response to client
    const jwtPayload = {
      email: existingUser.email,
      id: existingUser.id,
      fullname: existingUser.fullname,
    };

    const token = jwt.sign(jwtPayload, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({
      accessToken: token,
      message: "Login successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const registerController = async (req, res) => {
  const { email, fullname, password } = req.body;

  try {
    // find User by email
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.json({
        message: "User has already exist",
      });
    }

    // 3. Create new user, insert into DB
    // 3.1 Has password (mã hoá password)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3.2 Create new user object
    const newUser = new UserModel({
      email,
      fullname,
      password: hashedPassword,
    });

    // Insert new record into collection
    await newUser.save();

    // 4. Response to client
    res.status(201).json({
      user: newUser,
      message: "Register new user successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getMeController = async (req, res) => {
  const { id } = req.users;
  const currentUser = await UserModel.findById(id).select("-password");

  res.json({
    userInfo: currentUser,
  });
};
