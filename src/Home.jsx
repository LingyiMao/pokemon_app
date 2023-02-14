import { useEffect, useState } from "react";
import PokemonDetails from "./PokemonDetails";

const Home = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [singlePokemon, setSinglePokemon] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const showPokemonList = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=151"
    );
    const data = await response.json();

    function getAllPokenmon(result) {
      result.forEach(async (pokemon) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await response.json();

        setAllPokemon((currentList) => [...currentList, data]);
      });
    }

    getAllPokenmon(data.results);
  };

  useEffect(() => {
    // return () => {
    showPokemonList();
    // };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = async (name) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    console.log(data);
    setSinglePokemon(data);
    setIsActive(true);
  };

  return (
    <div className="content">
      <div className="pokemon-buttons">
        {allPokemon.map((pokemon, index) => (
          <button
            className="pokemon-button"
            // instead of pokemon.id i put index
            key={index}
            onClick={() => handleClick(pokemon.name)}
          >
            {" "}
            {pokemon.name}
          </button>
        ))}
      </div>

      {singlePokemon && (
        <div
          className={isActive ? "cards" : "cards-active"}
          key={singlePokemon.id}
        >
          <PokemonDetails
            name={singlePokemon.name}
            image={
              singlePokemon.sprites.other["official-artwork"].front_default
            }
            type={singlePokemon.types[0].type.name}
            height={singlePokemon.height}
            weight={singlePokemon.weight}
            key={singlePokemon.id}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
