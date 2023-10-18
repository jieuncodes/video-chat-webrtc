import { useState } from "react";
import Welcome from "../Welcome";
import { AppContainer } from "../styles/App";
import MainPage from "./MainPage";
import Auth from "./Auth";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isAuthorizedUser, setIsAuthorizedUser] = useState(false);

  const handleGetStarted = () => {
    setShowWelcome(false);
  };

  return (
    <AppContainer>
      {showWelcome ? (
        <Welcome onGetStartedClick={handleGetStarted} />
      ) : isAuthorizedUser ? (
        <MainPage />
      ) : (
        <Auth setIsAuthorizedUser={setIsAuthorizedUser} />
      )}
    </AppContainer>
  );
}

export default App;
