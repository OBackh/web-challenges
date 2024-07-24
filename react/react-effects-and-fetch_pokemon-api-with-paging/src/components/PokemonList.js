import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0); // Verwaltet den aktuellen Offset für die Paginierung
  const limit = 20; // Anzahl der Pokémon pro Seite

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${
            page * limit
          }&limit=${limit}`
        );
        const data = await response.json();
        setPokemon(data.results); // Setzt die Pokémon-Daten
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]); // useEffect wird erneut ausgeführt, wenn `page` sich ändert

  // Funktion zum Laden der nächsten Seite
  const handleGoNextPage = () => {
    setPage((prevPage) => prevPage + 1); // Erhöht den Seitenindex um 1
  };

  // Funktion zum Laden der vorherigen Seite
  const handleGoPrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0)); // Verringert den Seitenindex um 1, Minimum ist 0
  };

  return (
    <main>
      {!pokemon.length ? ( // Zeigt "Fetching" an, wenn die Pokémon-Daten noch leer sind
        <h1 className="pink">Still fetching...</h1>
      ) : (
        <>
          {page > 0 && (
            <button type="button" onClick={handleGoPrevPage}>
              Previous Page
            </button>
          )}
          <button type="button" onClick={handleGoNextPage}>
            Next Page
          </button>
          <ul>
            {pokemon.map(({ name }) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
