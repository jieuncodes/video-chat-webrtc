import { Icons } from "../../components/Icons";

function ChatHeader() {
  return (
    <div className="flex flex-row items-center text-white text-2xl">
      <Icons.messageSquare className="opacity-70 w-10 h-8 mt-1" />
      <span className="font-bold ">Chat</span>
    </div>
  );
}
export default ChatHeader;
