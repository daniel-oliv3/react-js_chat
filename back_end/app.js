const express = require('express');
const socket = require('socket.io');
const app = express();
 
app.get('/', function (req, res) {
  res.send('Olá, Mundo! - #Sapup3');
});
 
const server = app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});

io = socket(server);

io.on("connection", (socket) => {
    console.log(socket.io);
})