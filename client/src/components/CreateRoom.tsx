import { Input } from "@nextui-org/react";
function CreateRoom() {
  return (
    <div className="w-96 mb-28">
      <form action="">
        <h1 className="text-2xl text-white font-bold mb-6">
          Name of the room is...
        </h1>
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="text"
            variant="underlined"
            placeholder="ex. room_1"
            size="lg"
            isClearable
            isRequired
            className="text-white"
          />
        </div>{" "}
      </form>
    </div>
  );
}
export default CreateRoom;
