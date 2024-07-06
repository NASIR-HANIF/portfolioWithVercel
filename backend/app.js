import express from "express";
import cookieParser from "cookie-parser";
export const app = express();
import cors from "cors"
app.use(cookieParser())
app.use(express.json({limit : "50mb"}))
app.use(express.urlencoded({extended : true,limit:"50mb"}))

import { userRouter } from "./routes/User.js";

const express = require('express');
const cors = require('cors');
const app = express();

// Define allowed domains
const allowedDomains = [
  'http://nasirhanif.online',
  'http://localhost:3000',
  
];

// Allow all origins
app.use(cors());

// Allow specific origin(s)
app.use(cors({
  origin: 'http://localhost:3000'
}));


app.use("/api/v1",userRouter);

// Sample route
app.get('/', (req, res) => {
    res.send('NASIR Hello World!');
  });


  // 404 Not Found Route
app.use((req, res, next) => {
    res.status(404).send('Sorry, Route not found!');
});

