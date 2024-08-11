const  express = require("express");
const app = express();
const path = require("path");

const http =require("http");

const socketio = require("socket.io");
const server = http.createServer(app);

const port = 3000;

const io = socketio(server);

app.set("view engine","ejs");
app.use('/public', express.static(path.join(__dirname, 'public')));
// app.set('views', path.join(__dirname, '/views/index.ejs'));

io.on("connection", (socket) => {
    console.log("connected");
})

app.get("/",(req, res) => {
    res.render('index');
});

server.listen(port,() => {
    console.log(`listning on port ${port}`)
})