import { Input } from "@nextui-org/react";
import { socket } from "../../socket";
import { SubTitle, UnderLineInputBox } from "../../styles/App";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isUserInRoomState, roomListState } from "../../atoms";
import { useEffect } from "react";

interface CreateRoomInterface {
  isNoRoom: boolean;
  setIsNoRoom: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateRoom({ isNoRoom, setIsNoRoom }: CreateRoomInterface) {
  const setIsUserInRoom = useSetRecoilState(isUserInRoomState);
  const [roomList, setRoomList] = useRecoilState(roomListState);

  const doorKeeper = (msg: String) => {
    if (msg.includes("already exists")) {
      alert(msg);
      return;
    }
    console.log("msg", msg);
    setIsUserInRoom(true);

    //TODO: direct user into the room
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
        {isNoRoom ? (
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
