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

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedDomains.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204 // kuch purane browsers 204 status pe choke karte hain
};


// Use CORS middleware
app.use(cors(corsOptions));

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
  });


  // 404 Not Found Route
app.use((req, res, next) => {
    res.status(404).send('Sorry, Route not found!');
});

