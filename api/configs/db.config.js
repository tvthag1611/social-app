import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect(
    `${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`
  );

  console.log("Database is connected");
};

export { connectDb };
