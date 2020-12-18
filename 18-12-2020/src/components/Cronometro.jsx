import React from "react";

import Display from "./components/Display";
import Partials from "./components/Partials";

export default function Cronometro() {
  const [segundos, setSegundos] = React.useState(0);

  setTimeout(() => {
    setSegundos(segundos + 1);
  }, 100);

  return (
    <div id="cronometro">
      <Display segundos={segundos} />
      <Partials segundos={segundos} />
    </div>
  );
}
