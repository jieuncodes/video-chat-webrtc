import Chat from "./Chat";
import People from "./People";

function TextChatAndPeople() {
  return (
    <div className="grid grid-rows-2">
      <People />
      <Chat />
    </div>
  );
}
export default TextChatAndPeople;
