import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db";
const port = process.env.PORT;
if (!port) {
    process.exit(1);
}

// middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


const app = express();

app.get('/', (req, res) => {
    res.send("hello")
});


const init_app = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log(`http:127.0.0.1:${port}`);
    })
}

init_app()