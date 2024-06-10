import "express-async-errors";
import express from "express";
import { BadRequestError } from "./errors/CustomError.js";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";
import { errorHandlerMiddleware } from "./middleware/errorHandlerMiddleware.js";
import expressFileUpload from "express-fileupload";
const app = express();
app.use(express.json());
app.use(expressFileUpload({ useTempFiles: true }));
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(resolve(__dirname, "./client/dist")));
app.post("/api/v1/user/upload-image", async (req, res) => {
  if (!req.files) throw new BadRequestError("No file uploaded");
  const image = req.files.image;
  if (!image.mimetype.startsWith("image"))
    throw new BadRequestError("Please upload image");
  const maxFileSize = 10 * 1024 * 1024;
  if (image.size > maxFileSize)
    throw new BadRequestError("Please upload image smaller than 10MB");
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const imagePath = join(__dirname, "./client/dist/assets/" + `${image.name}`);
  console.log(__filename, __dirname, imagePath);
  await image.mv(imagePath);
  res.json({ img: { src: `/assets/${image.name}` } });
});

// FRONTEND
app.get("*", (req, res) => {
  res.sendFile(resolve(__dirname, "./client/dist", "index.html"));
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5200;
app.listen(port, (req, res) => {
  console.log(`Server is listening on port ${port}`);
});
