// USER AUTH DATA
// username
// userEmail
// userPassword
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { json } from "body-parser";
import authmodel from "../models/auth.Model.js";

export const registerUser = async (req, res) => {
  /* This code snippet is extracting the `username`, `email`, and `password` properties from the
  `req.body` object using object destructuring. It then checks if any of these values are falsy
  (empty, null, or undefined). If any of these fields are missing, it returns a JSON response
  indicating that all fields are required. This is a basic validation step to ensure that the
  required user registration fields are provided before proceeding with the registration process. */
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

    const User = authmodel(newUser);
    await User.save();

    // generating a jsonwebtoken

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