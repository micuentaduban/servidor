//requiriendo dependencias 
const express = require('express')
const path = require("path");
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const PORT = process.env.PORT || 3000


//const server = http.createServer(app)//creando el server con http y express como handle request

app.use(express.static(path.join(__dirname,'public')));


io.on('connection',(socket)=>{
    console.log("Cliente conectado");
});

//corriendo el servidor
server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`)
});



  

