import { useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Welcome from "../Welcome";
import { AppContainer } from "../styles/App";
import Auth from "./Auth";
import MainPage from "./MainPage";
import ChatRoom from "./rooms/ChatRoom";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isAuthorizedUser, setIsAuthorizedUser] = useState(false);

  const handleGetStarted = () => {
    setShowWelcome(false);
  };

  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />

          <Route path="/welcome" element={<Welcome />} />
          <Route
            path="/auth"
            element={<Auth setIsAuthorizedUser={setIsAuthorizedUser} />}
          />
          <Route
            path="/rooms"
            element={isAuthorizedUser ? <MainPage /> : <Navigate to="/auth" />}
          />
          <Route
            path="/chat/:roomId"
            element={isAuthorizedUser ? <ChatRoom /> : <Navigate to="/auth" />}
          />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
