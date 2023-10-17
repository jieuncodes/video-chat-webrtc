import { Button } from "@nextui-org/react";
import { Icons } from "./Icons";

function Chat() {
  return (
    <div className="grid grid-rows-[1fr_4fr_1fr]">
      <div className="flex flex-row items-center text-white text-2xl">
        <Icons.messageSquare className="opacity-70 w-10 h-8 mt-1" />
        <span className="font-bold ">Chat</span>
      </div>
      <div className="ongoing-msg-area">
        <ul></ul>
      </div>
      <div className="input-area flex flex-col items-center justify-center">
        <form action="" className="flex items-center justify-center">
          <input
            type="text"
            placeholder="write a message"
            className="w-[400px] h-10 mr-2 rounded-md opacity-50"
          />
          <Button color="primary" className="h-10 font-bold text-lg box-border">
            <Icons.send />
          </Button>
        </form>
      </div>
    </div>
  );
}
export default Chat;
