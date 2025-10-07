import express from "express";
// controllers
import {register_user, login_user} from "../controllers/auth.Controller.js"
const authRoutes = express.Router();

authRoutes
    .post('/register', register_user)
    .post('/login', login_user);

export default authRoutes;