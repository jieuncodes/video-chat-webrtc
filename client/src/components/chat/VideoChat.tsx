import { useParams } from "react-router-dom";
import Contents from "../layout/Contents";
import Header from "../layout/Header";
import { useEffect } from "react";
import { socket } from "../../socket";

function VideoChat() {
  const { roomId } = useParams();

  useEffect(() => {
    socket.emit("requestRooms");
    socket.on("receiveRooms", (receivedRooms) => {
      console.log(receivedRooms);
    });

    return () => {
      socket.off("receiveRooms");
    };
  }, []);

  return (
    <div className="grid grid-rows-[1.5fr_12fr]">
      <Header title={`Chat Room: ${roomId}`} />
      <div className="w-full h-full flex flex-col items-center justify-center px-4 ">
        <div className="w-full h-5/6 bg-blue-500/50 ">
          <div className="video-speaker"></div>
        </div>
      </div>
    </div>
  );
}
export default VideoChat;
