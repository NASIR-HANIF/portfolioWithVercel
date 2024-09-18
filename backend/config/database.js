import mongoose from "mongoose";
import  dotenv from 'dotenv';
import colors from "colors";
dotenv.config()




export  const connectDatabase = async () => {
//  const  DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@myfirstcluster.2zedvpv.mongodb.net/myportfolio`
  const DB_URL = process.env.MONGO_URI;
 // const DB_URL = 'mongodb://127.0.0.1:27017/myportfolio'
  try {
    const conn = await mongoose.connect(DB_URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

