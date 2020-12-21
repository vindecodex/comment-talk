const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);



io.on('connect', () => {
	console.log('a user connected');
});

app.listen(1818)
