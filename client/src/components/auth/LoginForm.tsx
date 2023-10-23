import { AuthDesc, AuthForm } from "../../styles/Auth";
import { Tab, Input, Link, Button } from "@nextui-org/react";

function LoginForm({
  setSelected,
}: {
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <AuthForm>
      <Input
        isRequired
        label="Email"
        placeholder="Enter your email"
        type="email"
        color="default"
      />
      <Input
        isRequired
        label="Password"
        placeholder="Enter your password"
        type="password"
      />
      <AuthDesc>
        Need to create an account?{" "}
        <Link size="sm" onPress={() => setSelected("sign-up")}>
          Sign up
        </Link>
      </AuthDesc>
      <div className="flex flex-col gap-2 justify-end">
        <Button fullWidth color="primary" variant="shadow">
          Login
        </Button>
        <Button fullWidth color="primary" variant="shadow">
          or just continue as guest
        </Button>
      </div>
    </AuthForm>
  );
}
export default LoginForm;
