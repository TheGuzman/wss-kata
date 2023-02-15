import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  ws.on("message", function message(message) {
    wss.clients.forEach((client) => {
      client.send(message.toString());
    });
  });
  ws.send("Hola Choriplanero");
});
