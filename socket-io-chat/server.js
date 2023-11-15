const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/Public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log('Connected...');

    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg);
    })
})

http.listen(8080, () => {
    console.log('Server is running at port 8080');
})
