import React from "react";
import ReactDOM from "react-dom";
import "./Assets/css/index.css";
import "./Assets/css/colors.css";
import "./Assets/css/importedFigmaColors.css";
import "./Assets/css/variables.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
