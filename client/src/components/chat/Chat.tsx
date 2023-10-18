import ChatForm from "./ChatForm";
import ChatHeader from "./ChatHeader";
import MessageArea from "./MessageArea";
import { ChatBox } from "../../styles/Chat";

function Chat() {
  return (
    <ChatBox>
      <ChatHeader />
      <MessageArea />
      <ChatForm />
    </ChatBox>
  );
}
export default Chat;
