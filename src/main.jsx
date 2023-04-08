import React from "react";
import ReactDOM from "react-dom/client";
import { ShowModalProvider } from "./state/show-modal-provider";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShowModalProvider>
    <App />
  </ShowModalProvider>
);
