const express = require('express');
const socket = require('socket.io');
const cors = require('cors');
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
  });
 
app.get('/', function (req, res) {
  res.send('Olá, Mundo! - #Sapup3');
});
 
const server = app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});

io = socket(server, {cors: {origin: "*"}});

io.on("connection", (socket) => {
    console.log(socket.io);
});