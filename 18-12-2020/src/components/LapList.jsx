import React from "react";

import { secondsToString } from "../helpers/conversions";

export default function LapList({ seconds }) {
  const [laps, setLaps] = React.useState([]);

  function handleRegisterLapButton() {
    setLaps([...laps, seconds]);
  }

  function handleClearLapsButton() {
    setLaps([]);
  }

  return (
    <div>
      <h1>Last Laps</h1>
      <button onClick={handleRegisterLapButton}>Register Lap</button>
      <button onClick={handleClearLapsButton}>Clear Laps</button>
      <ul>
        {laps.length > 0 ? (
          laps.map((time, i) => (
            <li key={time}>
              {i + 1} - {secondsToString(time)}
            </li>
          ))
        ) : (
          <h2>Empty lap list</h2>
        )}
      </ul>
    </div>
  );
}
