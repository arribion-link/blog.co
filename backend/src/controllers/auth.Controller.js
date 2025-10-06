import { json } from "body-parser";
import authmodel from "../models/auth.Model.js";

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.json({
            success: false,
            message: "All fields are required"
        })
    }

    const userExist = await authmodel.findOne();
    if (userExist) {
        return json({
            success: false,
            message: "User already exist use login"
        })
    }

    const salt = bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(salt);
    
}

const loginUser = async (req, res) => {
    
}