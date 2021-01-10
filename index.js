const express = require('express');
const app = express();
const server = require("http").createServer(app);
const io = require('socket.io');
const users = {};

io.on('connection', (socket) => {

})

app.get('/users', (req, res) => {
    let _users = [];
    for (let x in users) {
        const {name, username} = users[x];
        _users.push({
            name,
            username
        })
    }
    res.send(_users)
});

server.listen(3000)