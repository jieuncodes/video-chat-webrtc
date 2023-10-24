import { User } from "firebase/auth";

function useServerService() {
  const sendToServer = async ({
    token,
    user,
  }: {
    token: string;
    user: User;
  }) => {
    const response = await fetch(
      `http://${import.meta.env.VITE_SERVER_URL}/auth`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, user }),
      }
    );
    return response.json();
  };

  return { sendToServer };
}
export default useServerService;
