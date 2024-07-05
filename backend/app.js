import express from "express";
import cookieParser from "cookie-parser";
export const app = express();
import cors from "cors"
app.use(cookieParser())
app.use(express.json({limit : "50mb"}))
app.use(express.urlencoded({extended : true,limit:"50mb"}))
import { userRouter } from "./routes/User.js";
app.use("/api/v1",userRouter);

const allowedDomains = ['http://nasirhanif.online', 'http://localhost:3000', "https://portfolio-with-vercel-server.vercel.app"];

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (allowedDomains.indexOf(origin) !== -1) {
    // Set the Access-Control-Allow-Origin header for allowed origins
    res.setHeader('Access-Control-Allow-Origin', origin);

    // Set other CORS headers
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204); // No Content
  }

  next();
});



// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
  });


  // 404 Not Found Route
app.use((req, res, next) => {
    res.status(404).send('Sorry, Route not found!');
});

