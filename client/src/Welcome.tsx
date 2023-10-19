import { Button } from "@nextui-org/react";
import {
  Footer,
  GetStartedBtn,
  WelcomeContent,
  WelcomeTitleOrange,
  WelcomeTitlePink,
  WelcomeTitleWhite,
} from "./styles/welcome";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  return (
    <>
      <WelcomeContent>
        <div className="mb-3">
          <WelcomeTitleWhite>Welcome to</WelcomeTitleWhite>
          <WelcomeTitleOrange>VideoChat</WelcomeTitleOrange>
        </div>
        <div>
          <WelcomeTitleWhite>Chat with</WelcomeTitleWhite>
          <WelcomeTitlePink>Friends.</WelcomeTitlePink>
        </div>
        <GetStartedBtn
          color="primary"
          variant="shadow"
          onPress={navigate("/auth")}
        >
          Get Started
        </GetStartedBtn>
      </WelcomeContent>
      <Footer>
        <span>© 2023 This is Demo project made by jieuncodes</span>
      </Footer>
    </>
  );
}
export default Welcome;
