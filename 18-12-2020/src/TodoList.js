import React from "react";

export default function TodoList() {
  const [items, setItems] = React.useState([]);
  const [term, setTerm] = React.useState("");

  function handleInputChange(e) {
    setTerm(e.target.value);
  }

  function handleAddButtonClick() {
    setItems([...items, term]);
  }

  return (
    <div id="app">
      <h1>Lista de Tarefas</h1>
      <input onChange={handleInputChange} />
      <button onClick={handleAddButtonClick}>Adicionar #{items.length}</button>
      <ul>
        {items.map((element, i) => (
          <li key={i}>{element}</li>
        ))}
      </ul>
    </div>
  );
}
