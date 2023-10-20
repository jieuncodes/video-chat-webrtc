import { Button } from "@nextui-org/react";
import Chat from "./Chat";

function TextChatAndPeople() {
  return (
    <div className="h-full w-full p-4 grid grid-rows-[auto_1fr">
      <div className="flex flex-row p-4 justify-between">
        <h1 className="text-2xl text-white">Group Chat</h1>
        <div className="flex gap-2">
          <Button variant="solid">Messages</Button>
          <Button variant="ghost">Participants</Button>
        </div>
      </div>
      <Chat />
    </div>
  );
}
export default TextChatAndPeople;
