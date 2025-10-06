import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
if (!MONGO_URL) {
    process.exit(1);
}

export const connectDB = async () => {
    mongoose.connect();
}

export default connectDB;