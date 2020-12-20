import React from "react";

import Display from "./Display";
import LapList from "./LapList";

export default function Stopwatch() {
  const [seconds, setSeconds] = React.useState(0);
  const [running, setRunning] = React.useState(false);
  const [tick, setTick] = React.useState(undefined);

  function handleStartButton() {
    setRunning(!running);
    if (!running) {
      setTick(
        setInterval(() => {
          setSeconds((seconds) => seconds + 1);
        }, 100)
      );
    } else {
      clearInterval(tick);
      setTick(undefined);
    }
  }

  function handleRestartButton() {
    setSeconds(0);
  }

  return (
    <div id="stopwatch-wrapper">
      <Display seconds={seconds} />
      <button onClick={handleStartButton}>{!running ? "Start" : "Stop"}</button>
      <button onClick={handleRestartButton}>Restart</button>
      <LapList seconds={seconds} />
    </div>
  );
}
