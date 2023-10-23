import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Room } from "types";
import { roomListState } from "../../atoms";
import ChatRoomCard from "../chat/ChatRoomCard";
import { socket } from "../../socket";
import { Button } from "@nextui-org/react";
import { Icons } from "../Icons";
import { Navigate, useNavigate } from "react-router-dom";

function Lobby() {
  const navigate = useNavigate();

  const [roomList, setRoomList] = useRecoilState<Room[]>(roomListState);

  useEffect(() => {
    socket.emit("requestRooms");
    socket.on("receiveRooms", (currRooms) => {
      console.log(currRooms);
      setRoomList(currRooms);
    });

    return () => {
      socket.off("receiveRooms");
    };
  }, []);

  return (
    <div className="p-12 w-full h-full grid-container overflow-scroll">
      {roomList.map((room: Room) => (
        <ChatRoomCard key={room.id} room={room} />
      ))}
      <Button
        onPress={() => navigate("/rooms")}
        isIconOnly
        variant="faded"
        radius="full"
        size="lg"
        className="absolute right-28 bottom-20 bg-gradient-to-tr from-blue-500 to-blue-950 text-white shadow-lg"
      >
        <Icons.plus />
      </Button>
    </div>
  );
}
export default Lobby;
