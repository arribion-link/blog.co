// USER AUTH DATA
// username
// userEmail
// userPassword

import { json } from "body-parser";
import authmodel from "../models/auth.Model.js";

export const registerUser = async (req, res) => {
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
    const hashedPassword = bcrypt.hash(password, salt);

    const newUser = {
        username,
        email,
        password: hashedPassword
    }

    const User = authmodel.newUser()
    User.save()

}

export const loginUser = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

export default {
    registerUser,
    loginUser
}