const socket = new WebSocket("ws://localhost:8080");

socket.onmessage = ({ data }) => {
  console.log("Message from server: ", data);
};

const btn = document.querySelector("button");

btn.onclick = () => {
  socket.send("Hello");
};
