import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";  

import authRoutes from "./routes/authRoutes.js";
import massageRoutes from "./routes/massageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectMongoDB from "./db/conectMongoDB.js";
import { app, server } from "./socket/socket.js";

const port = process.env.port || 5001;
const __dirname = path.resolve()

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: ["http://localhost:5001", "https://chat-app-production-61a9.up.railway.app"], 
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use("/api/auth", authRoutes);
app.use("/api/massages", massageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/Front end/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Front end", "dist", "index.html"));
});

server.listen(port, () => {
  connectMongoDB();
  console.log(`Server is running on port ${port}`);
});
