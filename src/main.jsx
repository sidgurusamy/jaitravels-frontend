import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ModalProvider } from "./components/common/ModalContext.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <ModalProvider>
        <App />
      </ModalProvider>
  </BrowserRouter>
);
