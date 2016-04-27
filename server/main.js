var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static('app'));

io.on('connection',function(socket){
console.log("something connected to socket");
    socket.emit("messages",["hello","hi there","how are you"]);
    
})
server.listen(80);
