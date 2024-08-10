import express  from "express";
import { Socket } from "socket.io";
import http from "http"
import {Server} from "socket.io";

const port = 3000;
const app = express();

const server = http.createServer(app);

const io = new Server (server, {
    cors:{
        origin: "*"
    }
})



app.get("/",(req, res) => {
    res.send("hey");
});

server.listen(port,() => {
    console.log(`listning on port ${port}`)
})