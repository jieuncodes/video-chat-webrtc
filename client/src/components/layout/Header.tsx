import { SubTitle, Title } from "../../styles/App";

function Header({ title }: { title: string }) {
  return (
    <div className="border-b-2 border-b-white/20 ml-4 mr-4 flex items-center">
      <Title>{title}</Title>
    </div>
  );
}
export default Header;
