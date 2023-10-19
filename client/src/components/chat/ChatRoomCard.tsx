import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Room } from "types";

function ChatRoomCard({ room }: { room: Room }) {
  return (
    <Card isFooterBlurred className="w-[200px] h-[200px]">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold"># 1</p>
        <h4 className="text-stroke-black text-white font-medium text-2xl">
          {room.payload}
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="/images/ship1.jpeg"
      />
      <CardFooter className="absolute bg-white/20 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-white/80 text-tiny">Owner: Jieun</p>
          <p className="text-white/80 text-tiny">Ginger, Tommy,...</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Join
        </Button>
      </CardFooter>
    </Card>
  );
}
export default ChatRoomCard;
