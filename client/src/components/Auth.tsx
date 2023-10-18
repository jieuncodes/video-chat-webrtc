import { Button, Input } from "@nextui-org/react";
import { Form, NickNameBox } from "../styles/Auth";
import { Icons } from "./Icons";
import useSocket from "../hooks/useSocket";
import { makeMessage } from "../helpers";

function Auth({
  setIsAuthorizedUser,
}: {
  setIsAuthorizedUser: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { currSocket } = useSocket(`ws://${import.meta.env.VITE_SERVER_URL}`);

  const handleNickNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // checkIfValidName()

    const inputField = e.currentTarget.elements[0] as HTMLInputElement;
    const nickname = inputField.value.toString();

    if (currSocket && nickname.trim() !== "") {
      currSocket.send(makeMessage({ type: "nickname", payload: nickname }));
    }

    setIsAuthorizedUser(true);
  };

  return (
    <NickNameBox>
      <h1 className="text-white text-4xl">Choose a nickname.</h1>
      <Form onSubmit={handleNickNameSubmit}>
        <Input type="text" name="nickname" id="nickname" />
        <Button
          color="primary"
          type="submit"
          isIconOnly
          aria-label="submit nickname"
        >
          <Icons.login />
        </Button>
      </Form>
    </NickNameBox>
  );
}
export default Auth;