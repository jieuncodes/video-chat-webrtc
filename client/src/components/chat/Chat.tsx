import ChatForm from "./ChatForm";
import Messages from "./Messages";
import { TextChatBox } from "../../styles/Chat";

function Chat() {
  return (
    <TextChatBox>
      <Messages />
      <ChatForm />
    </TextChatBox>
  );
}
export default Chat;
