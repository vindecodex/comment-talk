const io = require('socket.io-client');

const socket = io('http://locallhost:1818');

socket.on('connect', () => {
	console.log(socket.connected);
})

setInterval(() => {
	console.log("A")
	socket.emit("ping", () => {
		console.log("pong");
	})
}, 2000);
