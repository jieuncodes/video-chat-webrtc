import { useState } from "react";
import CreateRoom from "./rooms/CreateRoom";
import RoomsList from "./rooms/RoomsList";
import { useRecoilValue } from "recoil";
import { isUserInRoomState } from "../atoms";

function Contents() {
  const [isNoRoom, setIsNoRoom] = useState(true);
  const isUserInRoom = useRecoilValue(isUserInRoomState);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {isNoRoom && !isUserInRoom ? (
        <CreateRoom isNoRoom={isNoRoom} setIsNoRoom={setIsNoRoom} />
      ) : (
        <RoomsList />
      )}
    </div>
  );
}
export default Contents;
