import React from "react";

import { segundosParaHoras, segundosParaMinutos } from "../helpers/conversions";

export default function Display({ segundos }) {
  return (
    <div>
      <h1>
        {segundosParaHoras(segundos)}:{segundosParaMinutos(segundos)}:
        {segundos % 60}
      </h1>
    </div>
  );
}
