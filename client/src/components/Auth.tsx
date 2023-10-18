import { Button, Input } from "@nextui-org/react";
import { Form, NickNameBox } from "../styles/Auth";
import { Icons } from "./Icons";

function Auth({
  setIsAuthorizedUser,
}: {
  setIsAuthorizedUser: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <NickNameBox>
      <h1 className="text-white text-4xl">Choose a nickname.</h1>
      <Form onSubmit={() => setIsAuthorizedUser(true)}>
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
