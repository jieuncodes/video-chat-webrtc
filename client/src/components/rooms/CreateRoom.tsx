import { Input } from "@nextui-org/react";
import { socket } from "../../socket";
import { SubTitle, UnderLineInputBox } from "../../styles/App";
import { useRecoilState } from "recoil";
import { roomListState } from "../../atoms";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SocketMsg } from "types";

function CreateRoom() {
  const navigate = useNavigate();
  const [roomList, setRoomList] = useRecoilState(roomListState);

  useEffect(() => {
    socket.emit("requestRooms");
    socket.on("receiveRooms", (receivedRooms) => {
      setRoomList(receivedRooms);
    });

    return () => {
      socket.off("receiveRooms");
    };
  }, []);

  const doorKeeper = (msg: SocketMsg) => {
    //validate room
    console.log("msg", msg.id);
    navigate(`/chat/${msg.id}`);
  };

  const handleRoomSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const inputElement = form.elements[0] as HTMLInputElement;

    socket.emit("createRoom", { payload: inputElement.value }, doorKeeper);

    inputElement.value = "";
  };

  return (
    <div className="w-96 mb-28">
      <form onSubmit={handleRoomSubmit}>
        {roomList.length == 0 ? (
          <SubTitle>There are no rooms available. Create your own! </SubTitle>
        ) : (
          <SubTitle>Name of the room is... </SubTitle>
        )}
        <UnderLineInputBox>
          <Input
            type="text"
            variant="underlined"
            placeholder="ex. room_1"
            size="lg"
            isClearable
            isRequired
          />
        </UnderLineInputBox>
      </form>
    </div>
  );
}
export default CreateRoom;
