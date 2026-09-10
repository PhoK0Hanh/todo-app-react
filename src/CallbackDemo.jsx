import { useCallback, useState, useMemo, useContext } from "react";
import CallbackChild from "./CallbackChild";
import ThemeContext from "./ThemeContext";

function CallbackDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("Hello");
  const theme = useContext(ThemeContext);

  const user = useMemo(() => {
    return { name: "Vũ" };
  }, []);

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
      <p>Theme: {theme}</p>

      <button onClick={handleClick}>Increase</button>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <CallbackChild onClick={handleClick} onMessage={message} onName={user} />
    </div>
  );
}

export default CallbackDemo;
