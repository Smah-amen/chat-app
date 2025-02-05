import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import massageRoutes from "./routes/massageRoutes.js";
import userRoutes from "./routes/userRoutes.js";


import connectMongoDB from "./db/conectMongoDB.js";

const app = express();
const port = process.env.PORT || 5000;


dotenv.config();

app.use(express.json());

app.use(cookieParser());


console.log("Server is starting...");

app.use("/api/auth", authRoutes);
app.use("/api/massages", massageRoutes);
app.use("/api/users", userRoutes);


app.listen(port, () => {
  connectMongoDB(); 
  console.log(`Server is running on port ${port}`);
});
