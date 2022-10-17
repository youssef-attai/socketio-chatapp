const http = require("http").createServer();

const PORT = 8080;

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  const sockedId = socket.id.substr(0, 2);
  console.log(`${sockedId} connected.`);
  socket.on("message", (message) => {
    console.log(message);
    // Broadcast message to everybody
    io.emit("message", `${sockedId} said ${message}`);
  });
});

http.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
