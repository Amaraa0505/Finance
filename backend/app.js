const express = require("express");
require("dotenv").config();
const catRouter = require("./routes/categoryRouter");

const authRoutes = require("./routes/authRoutes");
// const imageRoutes = require("./routes/imageRoutes");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/cat", catRouter);
app.use("/auth", authRoutes);
// app.use("/api/image", imageRoutes);

app.listen(PORT, () => {
  console.log(`Сервер ${PORT} дээр аслаа.`);
});
