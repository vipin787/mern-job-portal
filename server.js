import swaggerUi from 'swagger-ui-express'
import swaggerDoc from 'swagger-jsdoc';
// import
import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";

// security packages
import helmet from 'helmet'

import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'

// files imports
import connectDB from "./config/db.js";

// routes
import testRoutes from "./routes/testRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import jobsRoutes from './routes/jobsRoutes.js'

// const express = require('express')

// dotenv config
dotenv.config();

// mongodb connection
connectDB();

// swagger api config 
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Job Portal Application",
      description: "Node Expressjs Job Portal Application"
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["./routes/*.js"]
}

const spec = swaggerDoc(options)
// rest objects
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())


// port
const PORT = process.env.PORT || 8080;

//routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/job", jobsRoutes);

// homeRoute root
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(spec));

// validation middleware
app.use(errorMiddleware);

// listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running in ${process.env.DEV_MODE} mode on port no ${PORT}`
      .bgGreen.white
  );
});
