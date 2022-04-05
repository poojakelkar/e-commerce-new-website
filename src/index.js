import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
//import { CounterProvider } from "./Context/counterContext";
import Context from "./Context";
import { BrowserRouter } from "react-router-dom";
import { CounterProvider } from "./counterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <CounterProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CounterProvider>
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
