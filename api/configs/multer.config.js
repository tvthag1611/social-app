import multer from "multer";
import fs from "fs";

const UPLOAD_DIRECTORY = "uploads/";

if (!fs.existsSync(UPLOAD_DIRECTORY)) {
  fs.mkdirSync(UPLOAD_DIRECTORY);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOAD_DIRECTORY);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname.split(".")[0] + "-" + uniqueSuffix);
  },
});

export const uploadFile = multer({ storage });
