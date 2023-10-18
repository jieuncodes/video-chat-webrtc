import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
import http from "http";
import { WebSocket, WebSocketServer } from "ws";

const CLIENT_PORT = process.env.CLIENT_PORT || 3000;

const app = express();

app.use(cors({ origin: `http://localhost:${CLIENT_PORT}` }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});
app.get("/*", (req: Request, res: Response) => res.redirect("/"));

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const onSocketClose = () => console.info("👋 Disconnected from Browser");

const sockets: WebSocket[] = [];

interface CustomWebSocket extends WebSocket {
  nickname?: string;
}
const handleConnection = (socket: CustomWebSocket) => {
  sockets.push(socket);
  socket["nickname"] = "Anon";

  console.info("👍 Connected to Browser ");
  socket.on("close", onSocketClose);

  socket.on("message", (msg: WebSocket) => {
    console.info("server got this:", msg.toString());

    const parsedMsg = JSON.parse(msg.toString());
    switch (parsedMsg.type) {
      case "new_message":
        sockets.forEach((aSocket) =>
          aSocket.send(`${socket.nickname}: ${parsedMsg.payload}`)
        );
        break;
      case "nickname":
        socket["nickname"] = parsedMsg.payload;
        break;
    }
  });
};
wss.on("connection", handleConnection);

server.listen(process.env.PORT, () => {
  console.info(`🚀 Server is connected!`);
});
