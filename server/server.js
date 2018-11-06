const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const serverSocket = socketIO(server, { origins: "*:*" });

console.log("Server listening 9090");

serverSocket.on("connection", socket => {
  console.log("Server Socket: connected!");
  socket.emit("responseOne", 1);

  socket.on("requestOne", () => {
    console.log("requestOne!");
    socket.emit("responseOne", 1);
  });
});

server.listen(9090);
