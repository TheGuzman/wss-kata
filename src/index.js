const ws = new WebSocket("ws://localhost:8080");

ws.addEventListener("error", console.error);

ws.addEventListener("open", function open() {
  console.log("opened");
});
ws.addEventListener("message", function message(message) {
  const messageElement = document.querySelector(".chat__container");
  const messageContainer = document.createElement("div");
  const p = document.createElement("p");
  messageContainer.classList.add("message__container");
  p.classList.add("message__text");
  p.textContent = `${message.data}`;
  messageContainer.appendChild(p);
  messageElement.appendChild(messageContainer);
});
ws.addEventListener("close", function close(message) {});

//
