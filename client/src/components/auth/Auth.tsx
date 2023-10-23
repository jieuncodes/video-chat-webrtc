import {
  AuthCard,
  AuthCardBody,
  AuthContainer,
  AuthDesc,
  AuthForm,
  Form,
  NickNameBox,
} from "../../styles/Auth";
import { Icons } from "../Icons";
import { makeMessage } from "../../helpers";
import { useNavigate } from "react-router-dom";
import { Tabs, Tab, Input, Link, Button } from "@nextui-org/react";
import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Auth({
  setIsAuthorizedUser,
}: {
  setIsAuthorizedUser: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("login");

  const handleNickNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submit");
    e.preventDefault();
    // checkIfValidName()

    const inputField = e.currentTarget.elements[0] as HTMLInputElement;
    const nickname = inputField.value.toString();

    setIsAuthorizedUser(true);
    //navigate user to created room with id
    navigate("/rooms");
  };

  return (
    <AuthContainer>
      <AuthCard>
        <AuthCardBody>
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={(key) => setSelected(String(key))}
          >
            <Tab key="login" title="Login">
              <LoginForm setSelected={setSelected} />
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <SignUpForm setSelected={setSelected} />
            </Tab>
          </Tabs>
        </AuthCardBody>
      </AuthCard>
    </AuthContainer>
  );
}
export default Auth;
