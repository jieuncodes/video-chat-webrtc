import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";
const CLIENT_PORT = process.env.CLIENT_PORT || 3000;
console.log("", process.env.CLIENT_PORT);
const app = express();

app.use(cors({ origin: `http://localhost:${CLIENT_PORT}` }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});
app.get("/*", (req: Request, res: Response) => res.redirect("/"));

const httpServer = http.createServer(app);
const wsServer = new Server(httpServer, {
  cors: {
    origin: `http://localhost:${CLIENT_PORT}`,
  },
});

wsServer.on("connection", (socket) => {
  socket.on("enter_room", (message, done) => {
    console.log(message);
    setTimeout(() => {
      done();
    }, 1000);
  });
});
httpServer.listen(process.env.PORT, () => {
  console.info(`🚀 Server is connected!`);
});
