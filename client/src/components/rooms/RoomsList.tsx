import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Room } from "types";
import { roomListState } from "../../atoms";
import ChatRoomCard from "../../components/chat/ChatRoomCard";
import { socket } from "../../socket";

function RoomsList() {
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
    </div>
  );
}
export default RoomsList;
