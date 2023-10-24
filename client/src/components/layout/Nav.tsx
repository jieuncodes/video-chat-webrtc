import { NavContainer, NavMenuContainer } from "@/styles/Nav";
import { Avatar, Button } from "@nextui-org/react";
import { Icons } from "../Icons";
import { useAuth } from "@/providers/AuthProvider";

function Nav() {
  const { currentUser } = useAuth();
  return (
    <NavContainer>
      <div className="w-16 h-16 flex items-center justify-center ">
        <Button isIconOnly size="lg">
          <Icons.video />
        </Button>
      </div>
      <NavMenuContainer>
        <Button isIconOnly variant="light">
          <Icons.home size={32} color="white" />
        </Button>
        <Button isIconOnly variant="light">
          <Icons.users size={32} color="white" />
        </Button>
        <Button isIconOnly variant="light">
          <Icons.messagesSquare size={32} color="white" />
        </Button>
      </NavMenuContainer>
      <div className="userBtn flex items-center justify-center">
        <Avatar
          isBordered
          color="success"
          src={currentUser?.photoURL || "images/default_user_avatar.jpeg"}
        />
      </div>
    </NavContainer>
  );
}
export default Nav;
