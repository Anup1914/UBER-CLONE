const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./db/db");
const userRoutes = require("./routes/userRoutes");
const captainRoutes = require("./routes/captainRoutes");
const cookieParser = require("cookie-parser");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/users", userRoutes);
app.use("/captains", captainRoutes);

module.exports = app;
