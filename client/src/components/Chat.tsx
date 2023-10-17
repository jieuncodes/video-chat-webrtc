import Contents from "./Contents";
import Nav from "./Nav";
import Footer from "./Footer";
import Header from "./Header";

function ChatRooms() {
  return (
    <div className="box-border w-[1600px] h-[750px] bg-white/10 rounded-lg border-white grid  grid-cols-[1fr_15fr]">
      <Nav />
      <div className="grid grid-rows-[1fr_9fr_1fr]">
        <Header />
        <Contents />
        <Footer />
      </div>
    </div>
  );
}
export default ChatRooms;
