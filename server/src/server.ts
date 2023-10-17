import "dotenv/config";
import cors from "cors";
import express, { Request, Response } from "express";
import http from "http";
import { WebSocketServer } from "ws";

const CLIENT_PORT = process.env.CLIENT_PORT || 3000;

const app = express();

app.use(cors({ origin: `http://localhost:${CLIENT_PORT}` }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});
app.get("/*", (req: Request, res: Response) => res.redirect("/"));

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const handleConnection = (socket: WebSocket) => {
  socket.send("Hello from the server!");
};

wss.on("connection", handleConnection);

server.listen(process.env.PORT, () => {
  console.log(`🚀 Server is connected!`);
});
