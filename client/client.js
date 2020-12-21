const io = require('socket.io-client')

const socket = io('http://localhost:1818');

socket.open();

socket.on("connect", () => {
	console.log(socket.id);
})

socket.on("disconnect", () => {
	console.log(socket.id);
})
