import express from "express";
import userValidator from "../middlewares/userValidation.js";
// controllers
import {register_user, login_user} from "../controllers/auth.Controller.js"
const authRoutes = express.Router();

authRoutes
    .post('/register', userValidator, register_user)
    .post('/login', userValidator, login_user);

// ENDPOINTS
    
// http:localhost:

export default authRoutes;