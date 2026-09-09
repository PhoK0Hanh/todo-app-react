import { memo } from "react";

function CallbackChild({ onClick, onMessage, onName }) {
  console.log("CallbackChild render");

  return (
    <div>
      <h3>Callback Child</h3>
      <p>Message: {onMessage}</p>
      <p>Child Name: {onName.name}</p>
      <button onClick={onClick}>Increase from Child</button>
    </div>
  );
}

export default memo(CallbackChild);
