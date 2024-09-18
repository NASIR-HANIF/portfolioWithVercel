import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import  dotenv from 'dotenv';
dotenv.config()

export const app = express();

app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

import { userRouter } from "./routes/User.js";

// Define a single allowed origin based on environment
const allowedOrigin = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'  // Development origin
  : process.env.REACT_APP_API_BASE_URL || 'http://your-production-url.com';  // Production origin (from env or default)

// CORS options with single origin setting
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || origin === allowedOrigin) {
      callback(null, true); // Allow request if origin matches
    } else {
      callback(new Error('Not allowed by CORS')); // Block if not allowed
    }
  },
  credentials: true, // Allow credentials (cookies, etc.)
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Define your routes
app.use("/api/v1", userRouter);

// Sample route
app.get('/', (req, res) => {
  res.send('NASIR Hello World!');
});

// 404 Not Found Route
app.use((req, res, next) => {
  res.status(404).send('Sorry, Route not found!');
});

export default app;
