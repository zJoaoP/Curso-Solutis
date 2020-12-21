import React from "react";
import GlobalStyle from "./GlobalStyle";
import Stopwatch from "./components/Stopwatch/Stopwatch";

export default function App() {
  return (
    <div id="app">
      <GlobalStyle />
      <Stopwatch />
    </div>
  );
}
