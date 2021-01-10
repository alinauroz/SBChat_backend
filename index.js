const express = require('express');
const io = require('socket.io');

const app = express();
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