import React from "react";

import { secondsToString } from "../helpers/conversions";

export default function Display({ seconds }) {
  return (
    <div id="stopwatch-display">
      <h1>{secondsToString(seconds)}</h1>
    </div>
  );
}
