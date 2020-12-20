import React from "react";

import { secondsToHours, secondsToMinutes } from "../helpers/conversions";

export default function Display({ seconds }) {
  return (
    <div>
      <h1>
        {secondsToHours(seconds) % 24}:{secondsToMinutes(seconds) % 60}:
        {seconds % 60}
      </h1>
    </div>
  );
}
