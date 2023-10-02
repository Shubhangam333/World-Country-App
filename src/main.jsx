import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { CountryProvider } from "./context/CountryContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <CountryProvider>
      <App />
    </CountryProvider>
  </ThemeContextProvider>
);
