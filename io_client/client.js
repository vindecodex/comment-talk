const { Manager } = require("socket.io-client");

const manager = new Manager("ws://localhost:1818");
const socket = manager.socket("/");

socket.on("connect", () => {
  console.log(`connect ${socket.id}`);
});

socket.on("disconnect", () => {
  console.log(`disconnect`);
});

setInterval(() => {
  socket.emit("ping", () => {
    console.log("pong");
  });
}, 1000);
