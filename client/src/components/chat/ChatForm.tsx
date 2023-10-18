import { Button } from "@nextui-org/react";
import { Icons } from "../Icons";
import { useEffect, useState } from "react";
import { FormBox, Input, Form } from "./../../styles/Chat";
import useSocket from "../../hooks/useSocket";

function ChatForm() {
  const { currSocket } = useSocket(`ws://${import.meta.env.VITE_SERVER_URL}`);

  const handleSubmitChat = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputField = e.currentTarget.elements[0] as HTMLInputElement;
    const messageStr = inputField.value.toString();
    if (currSocket && messageStr.trim() !== "") {
      currSocket.send(messageStr);
      inputField.value = "";
    }
  };

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
