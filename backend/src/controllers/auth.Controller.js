// USER AUTH DATA
// username
// userEmail
// userPassword
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// import { json } from "body-parser";
import authmodel from "../models/auth.Model.js";

export const register_user = async (req,  res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
        const userExist = await authmodel.findOne({email});
        if (userExist) {
            return res.status(400).json({
                success: false,
                message: "User already exist use login"
            })
        }
        // const salt = bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const newUser = {
            username,
            email,
            password: hashedPassword
        }
    
        const User = authmodel(newUser);
        await User.save();
        res.status(200).json({
            message: "user created successfully..."
        });
    
        // generating a jsonwebtoken
        const jwt_token = jwt.sign(password, process.env.JWT_SECRET, { expiresIn: "1h" });
         res.cookie("token", jwt_token, { httpOnly: true });

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error occured registering the user!!!"
        });
    }

}

export const login_user = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "all fields are required"
            })
        }
        const chechUser = await authmodel.findOne({email});
        if (!chechUser) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            });
        }
        const passwordMatch  = await bcrypt.compare(password, chechUser.password);
        if (!passwordMatch) {
            return res.status(400).json({
                success: false,
                message: "Password not found please provide correct credentials",
            });
        }
   
        res.status(200).json({
            success: true,
            message: "user logged in successfully...",
        });
        const jwt_token = jwt.sign(password, process.env.JWT_SECRET, {
        expiresIn: "1h",
        });
        res.cookie("token", jwt_token, { httpOnly: true });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error occured registering the user",
        });
    }
}

export default {
    register_user,
    login_user
}