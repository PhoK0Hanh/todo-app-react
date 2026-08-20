import "./App.css";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  function handleIncrease() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrease() {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  }

  return (
    <div>
      <Header
        title="Todo App"
        description="Managing your tasks efficiently with our Todo App."
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <p>Hello, I am learning React.</p>
      <p>I will build a Todo list application.</p>
      <h1>Count: {count}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name: {name}</p>
      <button onClick={() => setName("")}>Clear</button>
    </div>
  );
}

export default App;
