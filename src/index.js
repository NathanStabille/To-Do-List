import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ListContextProvider } from "./context/ListContext";
import { ThemeContextProvider } from "./context/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ListContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ListContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
