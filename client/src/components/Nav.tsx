import { Button } from "@nextui-org/react";
import { Icons } from "./Icons";

function Nav() {
  return (
    <div className="grid grid-rows-[1fr_9fr_1fr] border-r-2 border-r-white/20 items-center justify-center p-3">
      <div className="w-16 h-16 flex items-center justify-center ">
        <Button isIconOnly size="lg">
          <Icons.video />
        </Button>
      </div>
      <div className="menu flex flex-col items-center justify-center gap-10">
        <Button isIconOnly variant="light">
          <Icons.home size={32} color="white" />
        </Button>
        <Button isIconOnly variant="light">
          <Icons.users size={32} color="white" />
        </Button>
        <Button isIconOnly variant="light">
          <Icons.messagesSquare size={32} color="white" />
        </Button>
      </div>
      <div className="userBtn"></div>
    </div>
  );
}
export default Nav;
