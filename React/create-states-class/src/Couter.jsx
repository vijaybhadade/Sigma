import { useState, useEffect } from "react";  // ⭐ import useEffect

function init() {
  console.log("init was called");
  return Math.random();
}

export default function Counter() {
  let [count, setCount] = useState(init);   // ⭐ useState

  // ⭐ CORRECT place for useEffect (not inside any other function)
  useEffect(() => {
    console.log("count updated to:", count);
  }, [count]);

  function inCounter() {
    setCount(currVal => currVal + 1);
  }

  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={inCounter}>increase count</button>
    </div>
  );
}
