import express from "express";
import Cookies  from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
const port = process.env.PORT;
if (!port) {
    process.exit(1);
}

const app = express();

// ROUTES
import authRoutes from "./src/routes/auth.Route.js";
import blogRoutes from "./src/routes/blog.Route.js";
import { cookie } from "express-validator";

// middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(cookie());

app.get('/', (req, res) => {
    res.send("API running successfully");
});

// Route
app.use('/auth', authRoutes);
app.use("/api/", blogRoutes);

const init_app = async () => {
    try {      
        await connectDB()
        app.listen(port, () => {
            console.log(`http://127.0.0.1:${port}`);
        })
    } catch (error) {
        console.log('error initializing the app')
    }
}

init_app()