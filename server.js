const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
	res.status(200).send("socket");
})

io.on('connection', (socket) => {
	console.log('a user connected');
});

app.listen(1818)
