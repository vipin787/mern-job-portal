// import
import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";

// files imports
import connectDB from "./config/db.js";

// routes
import testRoutes from "./routes/testRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'

// const express = require('express')

// dotenv config
dotenv.config();

// mongodb connection
connectDB();

// rest objects
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// port
const PORT = process.env.PORT || 8080;

//routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);

// validation middleware
app.use(errorMiddleware);

// listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running in ${process.env.DEV_MODE} mode on port no ${PORT}`
      .bgGreen.white
  );
});
