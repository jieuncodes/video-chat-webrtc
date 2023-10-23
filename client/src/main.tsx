import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./components/App";
import "./config/firebase-config";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </NextUIProvider>
  </React.StrictMode>
);
