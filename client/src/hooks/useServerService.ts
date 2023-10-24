function useServerService() {
  const sendTokenToServer = async (token: string) => {
    const response = await fetch(
      `http://${import.meta.env.VITE_SERVER_URL}/auth`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      }
    );
    return response.json();
  };

  return { sendTokenToServer };
}
export default useServerService;
