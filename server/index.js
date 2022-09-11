//Requiring dependencies
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
//importing routes
import userRoutes from "./routes/userRoutes.js";

    //middleware
    const corsConfig = {
        credentials: true,
        origin: "http://localhost:3000",
        exposedHeaders: ["set-cookie"],
    };
    app.use(cors(corsConfig));
//to parse requests
app.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}));
app.use(express.json());
//creating and editing cookies easier
app.use(cookieParser());
//adding routes
app.use("/user", userRoutes);

    //connecting to database
mongoose.connect(process.env.DB_CONNECTION)
    .then(() => app.listen(process.env.PORT || 5000))
    .catch((err) => console.log(err.message));