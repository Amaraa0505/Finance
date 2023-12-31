const express = require("express");
require("dotenv").config();
const path = require("path");
const catRouter = require("./routes/categoryRouter");

const authRoutes = require("./routes/authRoutes");
const imageRoutes = require("./routes/imageRoutes");
const transactionRoutes = require("./routes/transactionRutes");

const PORT = process.env.PORT;

const app = express();
app.use("/images", express.static(path.join(__dirname, "images/")));

app.use(express.json());
app.use("/cat", catRouter);
app.use("/auth", authRoutes);
app.use("/api/image", imageRoutes);
app.use("./api/transaction", transactionRoutes);

app.listen(PORT, () => {
  console.log(`Сервер ${PORT} дээр аслаа.`);
});
