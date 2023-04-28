import "./App.css";
import { useState } from "react";

import Counter from "./components/Counter";

function App() {
  // ids ?
  const [countersId, setCountersId] = useState([0]);

  return (
    <div className="app">
      <button
        disabled={countersId.length >= 3}
        onClick={() => {
          setCountersId([...countersId, Math.max(...countersId) + 1]);
        }}
      >
        Add Counter
      </button>

      <div className="counters">
        {countersId.map((id) => {
          return <Counter key={id} />;
        })}
      </div>
    </div>
  );
}

export default App;
