import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CalendarContextProvider from "./context/CalendarContext";

ReactDOM.render(
  <React.StrictMode>
    <CalendarContextProvider>
      <App />
    </CalendarContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
