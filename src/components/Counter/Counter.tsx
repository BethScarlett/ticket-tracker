import "./Counter.scss";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleCounterChange = (direction: string) => {
    if (direction === "-" && counter > 0) {
      setCounter(counter - 1);
    } else if (direction === "+") {
      setCounter(counter + 1);
    }
  };

  return (
    <div className="counter">
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <div className="counter__buttons">
        <button onClick={() => handleCounterChange(`-`)}>-</button>
        <button onClick={() => handleCounterChange(`+`)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
