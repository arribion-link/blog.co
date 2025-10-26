import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
if (!MONGO_URL) {
    process.exit(1);
}

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Database connected successfully...')
    } catch (error) {
        console.log('error connecting to a databse');
    }
}

export default connectDB;