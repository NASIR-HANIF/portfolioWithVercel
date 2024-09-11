import express from "express";
import cookieParser from "cookie-parser";
export const app = express();
import cors from "cors"
app.use(cookieParser())
app.use(express.json({limit : "50mb"}))
app.use(express.urlencoded({extended : true,limit:"50mb"}))
import { userRouter } from "./routes/User.js";



const allowedOrigins = [
    'https://www.nasirhanif.online',
    'http://localhost:3000'
  ];
  
  // Function to check if the origin is allowed
  const corsOptions = {
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };


// Allow all origins
<<<<<<< HEAD
app.use(cors(corsOptions));
=======
app.use(cors({
    origin: "https://www.nasirhanif.online", // Replace with your client domain
    credentials: true // Allow credentials (cookies) to be sent
}));
>>>>>>> 6b7a8e80ebbe2745f3499ae0bf34fe07bcc122ce



app.use("/api/v1",userRouter);

// Sample route
app.get('/', (req, res) => {
    res.send('NASIR Hello World!');
  });


  // 404 Not Found Route
app.use((req, res, next) => {
    res.status(404).send('Sorry, Route not found!');
});

