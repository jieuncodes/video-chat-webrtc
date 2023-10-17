import express, { Request, Response } from "express";
import http from "http";
import { WebSocketServer } from "ws";

const app = express();
const PORT = 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});
app.get("/*", (req: Request, res: Response) => res.redirect("/"));

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

server.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
