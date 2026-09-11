import { useState, useEffect } from "react";
function LoadingDemo2() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Effect chạy");
    if (loading) {
      const timer = setTimeout(() => {
        console.log("Timer đang chạy");
        setLoading(false);
      }, 2000);
      return () => {
        console.log("Cleanup timer");
        clearTimeout(timer);
      };
    }
  }, [loading]);

  return (
    <div>
      <button onClick={() => setLoading(true)}>Start loading</button>
      <p>{loading ? "Loading..." : "Done!"}</p>
    </div>
  );
}

export default LoadingDemo2;
