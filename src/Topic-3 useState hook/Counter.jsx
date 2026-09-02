import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log("count:", count);
  };

  console.log("Counter Render");
  return (
    <div>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};

export default Counter;

// when ever state variable changes inside a Component, react will re render that component
