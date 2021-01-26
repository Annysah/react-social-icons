import React from "react";
import ReactDOM from "react-dom";
import Socials from "./Socials";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Socials />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
