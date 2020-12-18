import React from "react";

export default function Partials({ seconds }) {
  const [partials, setPartials] = React.useState([]);
  return (
    <div>
      <h1>Parciais</h1>
      <ul>
        {partials.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
