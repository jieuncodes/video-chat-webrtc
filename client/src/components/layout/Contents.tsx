import CreateRoom from "../rooms/CreateRoom";
import RoomsList from "../rooms/RoomsList";
import { useRecoilValue } from "recoil";
import { roomListState } from "../../atoms";

function Contents() {
  const roomList = useRecoilValue(roomListState);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {roomList.length == 0 ? <CreateRoom /> : <RoomsList />}
    </div>
  );
}
export default Contents;
