import { Input } from "@nextui-org/react";
import { useState } from "react";
import { socket } from "../socket";

function CreateRoom() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  const handleRoomSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const inputElement = form.elements[0] as HTMLInputElement;
    console.log(inputElement.value);
  };

  return (
    <div className="w-96 mb-28">
      <form onSubmit={handleRoomSubmit}>
        <h1 className="text-2xl text-white font-bold mb-6">
          Name of the room is...
        </h1>
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="text"
            variant="underlined"
            placeholder="ex. room_1"
            size="lg"
            isClearable
            isRequired
            className="text-white"
          />
        </div>
      </form>
    </div>
  );
}
export default CreateRoom;
