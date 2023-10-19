import { useEffect } from "react";
import { socket } from "../../socket";
import { roomListState } from "../../atoms";
import { useRecoilState } from "recoil";
import { Room } from "types";
import ChatRoomCard from "../../components/chat/ChatRoomCard";

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
    <div className="p-12 w-full h-full grid-container ">
      {roomList.map((room: Room, index) => (
        <ChatRoomCard key={index} room={room} />
      ))}
    </div>
  );
}
export default RoomsList;
