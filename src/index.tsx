import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "@/App";
import { GlobalStyle } from "@/styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </RecoilRoot>
);
