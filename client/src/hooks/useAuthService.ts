import {
  GoogleAuthProvider,
  User,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

function useAuthService() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const loginWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    return { token, user };
  };

  const logout = () => {
    return auth.signOut();
  };

  const onAuthChange = (callback: (user: User | null) => void) => {
    return onAuthStateChanged(auth, callback);
  };

  return { loginWithGoogle, logout, onAuthChange };
}
export default useAuthService;
