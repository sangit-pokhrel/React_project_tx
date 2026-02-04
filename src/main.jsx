import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CartContextProvider from "./context/CartContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <Router>
        <App />
      </Router>
    </CartContextProvider>
  </StrictMode>
);
