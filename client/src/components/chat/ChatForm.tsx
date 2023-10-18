import { Button } from "@nextui-org/react";
import { makeMessage } from "../../helpers";
import { Icons } from "../Icons";
import { Form, FormBox, Input } from "./../../styles/Chat";

function ChatForm() {
  const handleSubmitChat = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <FormBox>
      <Form onSubmit={handleSubmitChat}>
        <Input type="text" placeholder="write a message" />
        <Button
          type="submit"
          color="primary"
          className="h-10 font-bold text-lg box-border"
        >
          <Icons.send />
        </Button>
      </Form>
    </FormBox>
  );
}
export default ChatForm;
