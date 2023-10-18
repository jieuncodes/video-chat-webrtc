import Contents from "./Contents";
import Header from "./Header";

function MainArea() {
  return (
    <div className="grid grid-rows-[1fr_12fr]">
      <Header />
      <Contents />
    </div>
  );
}
export default MainArea;
