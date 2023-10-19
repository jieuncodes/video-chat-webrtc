import { useParams } from "react-router-dom";

function ChatRoom() {
  const { roomId } = useParams();
  console.log("roomId", roomId);
  return <div>Room Detail for roomId: {roomId}</div>;
}
export default ChatRoom;
