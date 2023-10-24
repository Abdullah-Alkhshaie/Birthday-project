import { useState } from "react";

import "./App.css";
import "./index.css";
import data from "./data";
import List from "./List";

function App() {
  const [person, setPerson] = useState(data);

  const handleClick = () => {
    setPerson([]);
  };
  return (
    <main className="container">
      <h3>{person.length} Birthdays today</h3>
      <List person={person} />
      <button className="btn" onClick={handleClick}>
        Clear All
      </button>
    </main>
  );
}

export default App;
