import "./App.css";
import { useState } from "react";

import Counter from "./components/Counter";

function App() {
  const [counters, setCounters] = useState([0]);

  const setCounter = (id) => {
    return (value) => {
      const newCounters = [...counters];
      newCounters[id] = value;
      setCounters(newCounters);
    };
  };

  return (
    <div className="app">
      <button
        disabled={counters.length >= 3}
        onClick={() => {
          setCounters([...counters, 0]);
        }}
      >
        Add Counter
      </button>

      <div className="counters">
        {counters.map((counter, i) => {
          return (
            <Counter
              key={i}
              id={i}
              counter={counter}
              setCounter={setCounter(i)} // function factory
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
