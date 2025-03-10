import { Server } from "socket.io";

import http from "http";

import express from "express";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5001", "https://chat-app-production-61a9.up.railway.app"], 
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (recevierId) =>{
  return userSocketMap[recevierId];
}

const userSocketMap = {};
// {
//   userId: socketId;
// }
io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId !== "undefined") {
    userSocketMap[userId] = socket.id;
  }

  io.emit("getOnlineUser", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUser", Object.keys(userSocketMap));

  });
});

export { app, server, io };
