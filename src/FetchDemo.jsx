import { useState, useEffect } from "react";

function FetchDemo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function getTodos() {
      try {
        setError(null);
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos",
          { signal: controller.signal },
        );
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
    getTodos();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        data.slice(0, 5).map((todo) => (
          <p key={todo.id}>
            {todo.id} - {todo.title}
          </p>
        ))
      )}
    </div>
  );
}

export default FetchDemo;
