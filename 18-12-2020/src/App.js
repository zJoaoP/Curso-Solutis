import React from "react";
import GlobalStyle from "./GlobalStyle";

import Regressive from "./components/Regressive/Regressive";
import Stopwatch from "./components/Stopwatch/Stopwatch";
import Clock from "./components/Clock/Clock";

export default function App() {
  return (
    <div id="app">
      <GlobalStyle />
      <Clock />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Stopwatch />
        <Regressive />
      </div>
    </div>
  );
}
