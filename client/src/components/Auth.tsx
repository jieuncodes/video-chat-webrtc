import { Button, Input } from "@nextui-org/react";
import { Form, NickNameBox } from "../styles/Auth";
import { Icons } from "./Icons";
import { makeMessage } from "../helpers";
import { useNavigate } from "react-router-dom";

function Auth({
  setIsAuthorizedUser,
}: {
  setIsAuthorizedUser: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const handleNickNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submit");
    e.preventDefault();
    // checkIfValidName()

    const inputField = e.currentTarget.elements[0] as HTMLInputElement;
    const nickname = inputField.value.toString();

    setIsAuthorizedUser(true);
    navigate("/main");
  };

  return (
    <NickNameBox>
      <h1 className="text-white text-4xl">Choose a nickname.</h1>
      <Form onSubmit={handleNickNameSubmit}>
        <Input
          type="text"
          name="nickname"
          id="nickname"
          placeholder="Anonymous"
        />
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
