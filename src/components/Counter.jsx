const Counter = ({ counter, setCounter }) => {
  return (
    <div className="counter">
      <div>
        <button disabled={counter <= 0} onClick={() => setCounter(counter - 1)}>
          -
        </button>
        <span>{counter}</span>
        <button
          disabled={counter >= 10}
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
      </div>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default Counter;
