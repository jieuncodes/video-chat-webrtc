import { useEffect, useState } from "react";
import Welcome from "../Welcome";
import Chat from "./Chat";
import { AppContainer } from "../styles/App";
import ChatRooms from "./Chat";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleGetStarted = () => {
    setShowWelcome(false);
  };

  useEffect(() => {
    const socket = new WebSocket(`ws://${import.meta.env.VITE_SERVER_URL}`);

    socket.addEventListener("open", () => {
      console.log("👍 Socket open. Connected to Server.");
    });
    socket.addEventListener("message", (message) =>
      console.log(" ✉️ Message from server: ", message.data)
    );
    socket.addEventListener("close", () => console.log("🔒 Socket closed."));

    return () => {
      socket.close();
    };
  }, []);

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
