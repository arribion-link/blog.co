import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    username: {
        required: true,
        type: String,
        
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        String: true
    }
});

const authModel = mongoose.model("blogCoCollection", authSchema);

export default authModel;