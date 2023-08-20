import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect(
    `${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`
  );

  console.log("Database is connected");
};

export { connectDb };

/**
 * develop === main
 * git checkout develop
 * --> develop
 *
 * git checkout -b fix/create-post
 * --> fix/create-post
 * code giong y het develop
 * code them vao
 *
 * create pull req fix/create-post -> develop
 *
 * pull req vao trang
 * --> fix/create-post
 * git merge
 * git pull origin develop
 * git push
 *
 *
 * tao merge tren github
 */
