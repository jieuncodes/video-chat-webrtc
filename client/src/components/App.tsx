import { useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Welcome from "../Welcome";
import { AppContainer } from "../styles/App";
import Auth from "./auth/Auth";
import MainPage from "./MainPage";
import ChatRoom from "./rooms/ChatRoom";
import { useAuth } from "../providers/AuthProvider";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const { currentUser } = useAuth();

  const handleGetStarted = () => {
    setShowWelcome(false);
  };

  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/lobby"
            element={currentUser ? <MainPage /> : <Navigate to="/auth" />}
          />
          <Route
            path="/chat/:roomId"
            element={currentUser ? <ChatRoom /> : <Navigate to="/auth" />}
          />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
