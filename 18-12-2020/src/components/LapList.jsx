import React from "react";

import { secondsToHours, secondsToMinutes } from "../helpers/conversions";

export default function LapList({ seconds }) {
  const [laps, setLaps] = React.useState([]);

  function handleLapButton() {
    setLaps([...laps, seconds]);
  }

  return (
    <div>
      <h1>Last Laps</h1>
      <button onClick={handleLapButton}>Register Lap</button>
      <ul>
        {laps.map((time, i) => (
          <li key={time}>
            {i + 1} - {secondsToHours(time) % 24}:{secondsToMinutes(time) % 60}:
            {time % 60}
          </li>
        ))}
      </ul>
    </div>
  );
}
