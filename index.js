const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const users = {};

io.on('connection', (socket) => {
    socket.on('join', (data, callback) => {
        if (data.username in users) {
            callback({msg: `User with this username already exists`});
        }
        else {
            users[data.username] = data;
            users[data.username].socket = socket;
            callback(null, {msg: 'User joined successfully'});
        }
    })
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