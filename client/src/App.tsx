import { useEffect } from "react";
import Welcome from "./Welcome";

function App() {
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

  return <Welcome />;
}

export default App;
