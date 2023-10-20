import Nav from "./layout/Nav";
import MainArea from "./layout/MainArea";
import { MainContainer } from "../styles/App";

function MainPage() {
  return (
    <MainContainer>
      <Nav />
      <MainArea />
    </MainContainer>
  );
}
export default MainPage;
