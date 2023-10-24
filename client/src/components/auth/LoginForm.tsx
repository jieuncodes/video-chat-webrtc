import { AuthDesc, AuthForm } from "../../styles/Auth";
import { Tab, Input, Link, Button } from "@nextui-org/react";
import firebase from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleLogo from "./GoogleLogo";
import { useAuth } from "../../providers/AuthProvider";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function LoginForm({
  setSelected,
}: {
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { currentUser, loginWithGoogle, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/lobby`);
  }, [currentUser]);

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
