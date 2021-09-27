const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.send('Olá, Mundo! - #Sapup3');
});
 
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});