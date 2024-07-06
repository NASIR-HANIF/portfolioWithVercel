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

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedDomains.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
  credentials: true,
  optionsSuccessStatus: 204 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Use CORS middleware
app.use(cors(corsOptions));

app.use("/api/v1",userRouter);

// Sample route
app.get('/', (req, res) => {
    res.send('NASIR Hello World!');
  });


  // 404 Not Found Route
app.use((req, res, next) => {
    res.status(404).send('Sorry, Route not found!');
});

