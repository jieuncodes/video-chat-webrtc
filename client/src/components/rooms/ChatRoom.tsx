import MainArea from "../layout/MainArea";
import Nav from "../layout/Nav";
import { useParams } from "react-router-dom";
import { MainContainer } from "../../styles/App";
import TextChatBox from "../chat/TextChatBox";
import VideoChat from "../chat/VideoChat";

function ChatRoom() {
  const { roomId } = useParams();

  return (
    <MainContainer>
      <Nav />
      <VideoChat />
      <TextChatBox />
    </MainContainer>
  );
}
export default ChatRoom;
