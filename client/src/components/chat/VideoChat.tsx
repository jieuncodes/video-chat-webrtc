import { useParams } from "react-router-dom";
import Contents from "../layout/Contents";
import Header from "../layout/Header";
import { useEffect, useState } from "react";
import { socket } from "../../socket";
import { Room, SocketMsg } from "@/types";

function VideoChat() {
  const { roomId } = useParams();
  const [curr_room, setCurrRoom] = useState<SocketMsg>();
  useEffect(() => {
    if (!roomId) return;
    socket.emit("requestRooms");
    socket.on("receiveRooms", (receivedRooms) => {
      console.log(receivedRooms);

      console.log(
        "  receivedRooms.filter((room: SocketMsg) => room.id === +roomId)",
        receivedRooms.filter((room: SocketMsg) => room.id === +roomId)
      );
      setCurrRoom(
        receivedRooms.filter((room: SocketMsg) => room.id === +roomId)
      );
    });

    return () => {
      socket.off("receiveRooms");
    };
  }, []);
  console.log(curr_room?.id?.toString());
  return (
    <div className="grid grid-rows-[1.5fr_12fr]">
      <Header
        title={curr_room?.name?.payload || "No title"}
        chatNum={curr_room?.id?.toString() || ""}
      />
      <div className="w-full h-full flex flex-col items-center justify-center px-4 ">
        <div className="w-full h-5/6 bg-blue-500/50 ">
          <div className="video-speaker"></div>
        </div>
      </div>
    </div>
  );
}
export default VideoChat;
