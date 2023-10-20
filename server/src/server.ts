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

let roomIdCounter = 1000;
const rooms: { id: number; name: string }[] = [];

const httpServer = http.createServer(app);
const wsServer = new Server(httpServer, {
  cors: {
    origin: `http://localhost:${CLIENT_PORT}`,
  },
});

wsServer.on("connection", (socket) => {
  socket.on("requestRooms", () => {
    socket.emit("receiveRooms", rooms);
  });

  socket.on("createRoom", (roomName, done) => {
    console.log("createRoom event received with data:", roomName.payload);

    const roomExists = rooms.find((room) => room.name === roomName);
    if (roomExists) {
      return done(`Room ${roomName} already exists!`);
    }

    const newRoom = { id: roomIdCounter, name: roomName };
    roomIdCounter++;
    console.log("new", newRoom);
    rooms.push(newRoom);
    wsServer.emit("updateRoomList", rooms);
    done(newRoom);
  });

  socket.on("joinRoom", (roomName, done) => {
    socket.join(roomName);
    done(`room ${roomName} joined!`);
    socket.to(roomName).emit("welcome");
  });
});

httpServer.listen(process.env.PORT, () => {
  console.info(`🚀 Server is connected!`);
});
