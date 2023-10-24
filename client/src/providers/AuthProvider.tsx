import useAuthService from "../hooks/useAuthService";
import useServerService from "../hooks/useServerService";
import { User } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  currentUser: User | null;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const { loginWithGoogle, logout, onAuthChange } = useAuthService();
  const { sendToServer } = useServerService();

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, [onAuthChange]);

  const login = async () => {
    try {
      const { token, user } = await loginWithGoogle();
      if (token) {
        const data = await sendToServer({ token, user });

        console.log(
          data.success ? "Google login succeed!" : "Google login failed"
        );
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const value = {
    currentUser,
    loginWithGoogle: login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
