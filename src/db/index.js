import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstnce = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstnce.connection.host}`)
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR/FAILED => ", error);
        process.exit(1);
    }
}

export default connectDB;