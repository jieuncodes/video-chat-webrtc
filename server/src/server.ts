import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";
const CLIENT_PORT = process.env.CLIENT_PORT || 3000;

const app = express();

app.use(cors({ origin: `http://localhost:${CLIENT_PORT}` }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});
app.get("/*", (req: Request, res: Response) => res.redirect("/"));

const httpServer = http.createServer(app);
const wsServer = new Server(httpServer);

wsServer.on("connection", (socket) => {
  console.log("", socket);
});

httpServer.listen(process.env.PORT, () => {
  console.info(`🚀 Server is connected!`);
});
