// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})

const app = express();

connectDB();





// Second Method: Ify Module for DB connection
// ( async() => {
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//        app.on("error", (error) => {
//         console.log("ERROR: ", error);
//         throw error;
//        })
//        app.listen(process.env.PORT, () => {
//          console.log(`App is Listening on port ${process.env.PORT}`)
//        })
//     }catch(error){
//         console.error("ERROR: ", error);
//         throw error;
//     }
// })()
