import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";

function FetchDemo() {
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState(null);
  const [details, setDetails] = useState([]);
  //   const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const controller = new AbortController();
  //     async function getTodos() {
  //       try {
  //         setError(null);
  //         setLoading(true);
  //         const response = await fetch(
  //           "https://jsonplaceholder.typicode.com/todos",
  //           { signal: controller.signal },
  //         );
  //         if (!response.ok) {
  //           throw new Error("Request failed");
  //         }
  //         setData(await response.json());
  //       } catch (error) {
  //         if (error.name !== "AbortError") {
  //           setError(error.message);
  //         }
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //     getTodos();
  //     return () => {
  //       controller.abort();
  //     };
  //   }, []);

  const { data, loading, error } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0",
  );

  async function getPokemonDetail(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const detail = await response.json();

    return detail;
  }
  useEffect(() => {
    if (data.results) {
      async function fetchDetails() {
        try {
          setDetailError(null);
          setDetailLoading(true);
          const results = await Promise.all(
            data.results.map((pokemon) => getPokemonDetail(pokemon.url)),
          );

          setDetails(results);
        } catch (error) {
          setDetailError(error.message);
        } finally {
          setDetailLoading(false);
        }
      }
      fetchDetails();
    }
  }, [data]);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : detailLoading ? (
        <p>Detail Loading...</p>
      ) : detailError ? (
        <p>{detailError}</p>
      ) : (
        details.map((pokemon) => (
          <div key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default FetchDemo;
