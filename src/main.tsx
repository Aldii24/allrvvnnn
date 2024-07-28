import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./components/Navbar.tsx";
import UseDarkModeContext from "./context/darkMode-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UseDarkModeContext>
    <>
      <Navbar />
      <App />
    </>
  </UseDarkModeContext>
);
