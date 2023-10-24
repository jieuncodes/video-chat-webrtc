import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./components/App";
import "./config/firebase-config";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RecoilRoot>
        <AuthProvider>
          <main className="dark text-foreground bg-background">
            <App />
          </main>
        </AuthProvider>
      </RecoilRoot>
    </NextUIProvider>
  </React.StrictMode>
);
