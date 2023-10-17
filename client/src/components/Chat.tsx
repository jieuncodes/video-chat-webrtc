import { Icons } from "./Icons";
import ChatForm from "./ChatForm";

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
      <ChatForm />
    </div>
  );
}
export default Chat;
