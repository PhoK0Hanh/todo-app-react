import { memo, useContext } from "react";
import ThemeContext from "./ThemeContext";

function CallbackChild({ onClick, onMessage, onName }) {
  console.log("CallbackChild render");
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h3>Callback Child</h3>
      <p>Message: {onMessage}</p>
      <p>Child Name: {onName.name}</p>
      <p>Child Theme: {theme}</p>
      <button onClick={onClick}>Increase from Child</button>
    </div>
  );
}

export default memo(CallbackChild);
