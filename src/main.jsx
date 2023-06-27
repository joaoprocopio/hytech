import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";

const rootEl = document.getElementById("root");
const root = createRoot(rootEl);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
