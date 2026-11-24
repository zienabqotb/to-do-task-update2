// import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { MainStore } from "./stores/MainStore.jsx";
import { createRoot } from "react-dom/client";


createRoot(document.getElementById("root")).render(
    <MainStore>
      <App />
    </MainStore>
);
