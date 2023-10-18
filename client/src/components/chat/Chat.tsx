import ChatForm from "./ChatForm";
import Messages from "./Messages";
import { ChatBox } from "../../styles/Chat";

function Chat() {
  return (
    <ChatBox>
      <Messages />
      <ChatForm />
    </ChatBox>
  );
}
export default Chat;
