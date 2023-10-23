import { AuthDesc, AuthForm } from "../../styles/Auth";
import { Tab, Input, Link, Button } from "@nextui-org/react";
import firebase from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleLogo from "./GoogleLogo";

function LoginForm({
  setSelected,
}: {
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      console.log("token", token);
      console.log("user", user);
    } catch (error: unknown) {
      console.error(error);
    }
  };

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
        <Button
          fullWidth
          color="default"
          onPress={loginWithGoogle}
          startContent={<GoogleLogo />}
          className="font-bold"
        >
          Login with Google
        </Button>
      </div>
    </AuthForm>
  );
}
export default LoginForm;
