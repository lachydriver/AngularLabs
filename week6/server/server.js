const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const sockets = require('./sockets.js');
const server = require('./listen.js');

//define port
const port = 3000;

app.use(cors());

sockets.connect(io, port);

server.listen(http,port);