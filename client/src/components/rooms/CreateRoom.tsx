import { Input } from "@nextui-org/react";
import { socket } from "../../socket";
import { SubTitle, UnderLineInputBox } from "../../styles/App";
import { useSetRecoilState } from "recoil";
import { isUserInRoomState } from "../../atoms";

interface CreateRoomInterface {
  isNoRoom: boolean;
  setIsNoRoom: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateRoom({ isNoRoom, setIsNoRoom }: CreateRoomInterface) {
  const setIsUserInRoom = useSetRecoilState(isUserInRoomState);
  const showRoom = () => {};

  const handleRoomSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const inputElement = form.elements[0] as HTMLInputElement;
    console.log(inputElement.value);
    socket.emit("room", { payload: inputElement.value }, showRoom);

    setIsUserInRoom(true);
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
