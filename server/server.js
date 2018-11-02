const http = require("http")
const express = require("express")
const socketIO = require("socket.io")

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {origins:"*:*"});

console.log("Server listening 9090")
server.listen(9090);

io.on("connection",()=>{
    console.log("Server Socket: connected!")
})
