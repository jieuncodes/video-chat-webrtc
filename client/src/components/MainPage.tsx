import Nav from "./Nav";
import MainArea from "./MainArea";
import { MainContainer } from "../styles/App";
import Chats from "./Chats";

function MainPage() {
  return (
    <MainContainer>
      <Nav />
      <MainArea />
      <Chats />
    </MainContainer>
  );
}
export default MainPage;
