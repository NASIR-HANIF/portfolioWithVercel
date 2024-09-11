import express from "express";
import cookieParser from "cookie-parser";
export const app = express();
import cors from "cors"
app.use(cookieParser())
app.use(express.json({limit : "50mb"}))
app.use(express.urlencoded({extended : true,limit:"50mb"}))
import { userRouter } from "./routes/User.js";


// Allow all origins
app.use(cors({
    origin: "https://www.nasirhanif.online", // Replace with your client domain
    credentials: true // Allow credentials (cookies) to be sent
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

