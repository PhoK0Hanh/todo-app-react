import { useCallback, useState } from "react";
import CallbackChild from "./CallbackChild";

function CallbackDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleClick = useCallback(() => {
    console.log("handleClick");
    setCount((prevCount) => prevCount + 1);
  }, []);

  console.log("CallbackDemo render");

  return (
    <div>
      <h2>Callback Demo</h2>

      <p>Count: {count}</p>
      <p>Name: {name}</p>

      <button onClick={handleClick}>Increase</button>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <CallbackChild onClick={handleClick} />
    </div>
  );
}

export default CallbackDemo;
