import { memo } from "react";

function CallbackChild({ onClick }) {
  console.log("CallbackChild render");

  return (
    <div>
      <h3>Callback Child</h3>
      <button onClick={onClick}>Increase from Child</button>
    </div>
  );
}

export default memo(CallbackChild);
