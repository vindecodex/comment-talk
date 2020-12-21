const { Server } = require('socket.io');

const io = new Server(1818);

io.on("connection", (socket) => {
  console.log(`connect ${socket.id}`);

  socket.on("ping", (cb) => {
    console.log("ping");
    cb();
  });

  socket.on("disconnect", () => {
    console.log(`disconnect ${socket.id}`);
  });
});
