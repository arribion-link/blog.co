import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    username: {
        required: true,
        type: String,
        
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        String: true
    }
},{timeStamp: true});

const authModel = mongoose.model("blogCoCollection", authSchema);

export default authModel;