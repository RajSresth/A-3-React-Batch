import { useState, useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log("Counter Render");

  const handleCountRef = () => {
    countRef.current = countRef.current + 1;
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>

      <h2>======================</h2>
      <h2>CountRef: {countRef.current}</h2>
      <button onClick={handleCountRef}>Add</button>
    </div>
  );
};

export default Counter;
