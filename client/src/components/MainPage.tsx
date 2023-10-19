import Nav from "./Nav";
import MainArea from "./MainArea";
import { MainContainer } from "../styles/App";
import ChatBox from "./ChatBox";
import { isUserInRoomState } from "../atoms";
import { useRecoilValue } from "recoil";

function MainPage() {
  const isUserInRoom = useRecoilValue(isUserInRoomState);

  return (
    <MainContainer>
      <Nav />
      <MainArea />
      {/* {isUserInRoom && <ChatBox />} */}
    </MainContainer>
  );
}
export default MainPage;
