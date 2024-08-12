const  express = require("express");
const path = require("path");
const socketio = require("socket.io");
const http =require("http");

const app = express();
const server = http.createServer(app);
const port = 3000;
const io = socketio(server);

app.use(express.json())

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, 'public')));

io.on("connection", (socket) => {
    socket.on("send-location",(data) => {
        io.emit("receive-location", {id: socket.id, ...data});
    });
    console.log("connected");

    socket.on("disconnect", () => {
        io.emit("user-disconnected", socket.id);
    })
})

app.get("/",(req, res) => {
    res.render('index');
});

server.listen(port,() => {
    console.log(`listning on port ${port}`)
})