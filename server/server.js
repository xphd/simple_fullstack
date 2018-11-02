const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const socket = socketIO(server, { origins: "*:*" });

console.log("Server listening 9090");
server.listen(9090);

socket.on("connection", () => {
  console.log("Server Socket: connected!");
});
