import { useEffect, useState } from "react";
import { getPokemon } from "./api/pokemonApi";

function AxiosDemo() {
  const [randomId, setRandomId] = useState(
    Math.floor(Math.random() * 1025) + 1,
  );
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getPokemon(randomId)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((err) => {
        setError("Failed to load Pokemon data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [randomId]);
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div>
          <h2>Pokemon: {pokemon?.name}</h2>
          <h3>ID: {pokemon?.id}</h3>
          <h3>Height: {pokemon?.height}</h3>
          <h3>Weight: {pokemon?.weight}</h3>
          <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
          <div>
            <button
              onClick={() => setRandomId(Math.floor(Math.random() * 1025) + 1)}
            >
              Random Pokemon
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AxiosDemo;
