import { Button } from "@nextui-org/react";
import {
  Footer,
  GetStartedBtn,
  WelcomeContainer,
  WelcomeContent,
  WelcomeTitleOrange,
  WelcomeTitlePink,
  WelcomeTitleWhite,
} from "./styles/welcome";

function Welcome() {
  return (
    <WelcomeContainer>
      <WelcomeContent>
        <div className="mb-3">
          <WelcomeTitleWhite>Welcome to</WelcomeTitleWhite>
          <WelcomeTitleOrange>VideoChat</WelcomeTitleOrange>
        </div>
        <div>
          <WelcomeTitleWhite>Chat with</WelcomeTitleWhite>
          <WelcomeTitlePink>Friends.</WelcomeTitlePink>
        </div>
        <GetStartedBtn color="primary" variant="shadow">
          Get Started
        </GetStartedBtn>
      </WelcomeContent>
      <Footer>
        <span>© 2023 This is Demo project made by jieuncodes</span>
      </Footer>
    </WelcomeContainer>
  );
}
export default Welcome;
