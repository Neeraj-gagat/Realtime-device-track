import express  from "express";
import { Socket } from "socket.io";
import http from "http"
import {Server} from "socket.io";
import path from "path"

const port = 3000;
const app = express();

const server = http.createServer(app);

const io = new Server (server, {
    cors:{
        origin: "*"
    }
})

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req, res) => {
    res.send("hey");
});

server.listen(port,() => {
    console.log(`listning on port ${port}`)
})