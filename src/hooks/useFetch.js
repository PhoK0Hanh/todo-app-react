import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        setError(null);
        setLoading(true);
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error("Request failed");
        }
        setData(await response.json());
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data, loading, error };
}
export default useFetch;
