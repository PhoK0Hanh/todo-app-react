import { useState } from "react";
function LoadingDemo() {
  const [loading, setLoading] = useState(false);
  function handleLoading() {
    setLoading(true);
    setTimeout(() => {
      // sau 2 giây
      setLoading(false);
    }, 2000);
  }

  return (
    <div>
      <button onClick={() => handleLoading()}>Start loading</button>
      <p>{loading ? "Loading..." : "Done!"}</p>
    </div>
  );
}

export default LoadingDemo;
