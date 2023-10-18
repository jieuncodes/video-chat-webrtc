import { useEffect, useState } from "react";

function useSocket(URL: string) {
  const [currSocket, setCurrSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(URL);

    socket.onopen = () => {
      console.log("Connected to the server!");
    };
    socket.onmessage = (msg) => {
      console.log(`New message: ${msg.data} from the server`);
    };
    socket.onclose = () => {
      console.log(`Disconnected from the server!`);
    };
    setCurrSocket(socket);
    return () => {
      socket.close();
    };
  }, []);
  return { currSocket, setCurrSocket };
}
export default useSocket;
