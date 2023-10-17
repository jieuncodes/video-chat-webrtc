import { Button } from "@nextui-org/react";
import { Icons } from "./Icons";
import { useEffect, useState } from "react";

function ChatForm() {
  const [currSocket, setCurrSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(`ws://${import.meta.env.VITE_SERVER_URL}`);

    socket.onopen = () => {
      console.log("Connected to the server!");
    };
    socket.onmessage = (msg) => {
      console.log(`New message: ${msg.data} from the server`);
    };
    socket.onclose = () => {
      console.log(`Disconnected from the server!`);
    };
    setCurrSocket(socket);
    return () => {
      socket.close();
    };
  }, []);

  const handleSubmitChat = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const messageString = inputValue.toString();
    currSocket?.send(messageString);
    (e.currentTarget.elements[0] as HTMLInputElement).value = "";
  };
  return (
    <div className="input-area flex flex-col items-center justify-center">
      <form
        className="flex items-center justify-center"
        onSubmit={handleSubmitChat}
      >
        <input
          type="text"
          placeholder="write a message"
          className="w-[400px] h-10 mr-2 rounded-md opacity-50"
        />
        <Button
          type="submit"
          color="primary"
          className="h-10 font-bold text-lg box-border"
        >
          <Icons.send />
        </Button>
      </form>
    </div>
  );
}
export default ChatForm;
