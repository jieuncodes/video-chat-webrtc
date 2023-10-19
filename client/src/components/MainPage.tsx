import Nav from "./Nav";
import MainArea from "./MainArea";
import { MainContainer } from "../styles/App";
import ChatBox from "./ChatBox";

function MainPage() {
  return (
    <MainContainer>
      <Nav />
      <MainArea />
      {/* {isUserInRoom && <ChatBox />} */}
    </MainContainer>
  );
}
export default MainPage;
