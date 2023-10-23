import CreateRoom from "../rooms/CreateRoom";
import Lobby from "../rooms/Lobby";
import { useRecoilValue } from "recoil";
import { roomListState } from "../../atoms";

function Contents() {
  const roomList = useRecoilValue(roomListState);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {roomList.length == 0 ? <CreateRoom /> : <Lobby />}
    </div>
  );
}
export default Contents;
