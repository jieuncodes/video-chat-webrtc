import { SubTitle, Title } from "../../styles/App";

export interface HeaderProps {
  title: string;
  chatNum?: string;
}

function Header({ title, chatNum }: HeaderProps) {
  return (
    <div className="border-b-2 border-b-white/20 ml-4 mr-4 flex items-center">
      <Title>{title}</Title>
      <SubTitle>{chatNum}</SubTitle>
    </div>
  );
}
export default Header;
