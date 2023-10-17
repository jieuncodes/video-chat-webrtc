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

const onSocketClose = () => console.log("👋 Disconnected from Browser");

const handleConnection = (socket: WebSocket) => {
  console.log("👍 Connected to Browser ");
  socket.on("close", onSocketClose);
  socket.on("message", (message: WebSocket) => {
    console.log("server got this:", message.toString());
    socket.send(message.toString());
  });
};
wss.on("connection", handleConnection);

server.listen(process.env.PORT, () => {
  console.log(`🚀 Server is connected!`);
});
