import { useState } from "react";
import Welcome from "../Welcome";
import { AppContainer } from "../styles/App";
import ChatRooms from "./chat/ChatRooms";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleGetStarted = () => {
    setShowWelcome(false);
  };

  return (
    <AppContainer>
      {showWelcome ? (
        <Welcome onGetStartedClick={handleGetStarted} />
      ) : (
        <ChatRooms />
      )}
    </AppContainer>
  );
}

export default App;
