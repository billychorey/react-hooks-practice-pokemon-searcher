import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((res) => res.json())
      .then((pokemons) => {
        setPokemons(pokemons);
      });
  }, []);

  function addPokemon(newPokemon) {
    // Check if a Pokemon with the same name already exists
    const existingPokemon = pokemons.find((pokemon) => pokemon.name === newPokemon.name);

    if (existingPokemon) {
      // Handle error or duplicate Pokemon here
      console.error("A Pokemon with the same name already exists.");
      return;
    }

    const pokemonToAdd = {
      id: newPokemon.name, // Use the name as the key
      name: newPokemon.name,
      hp: newPokemon.hp,
      sprites: {
        front: newPokemon.frontUrl,
        back: newPokemon.backUrl,
      },
    };

    setPokemons((prevPokemons) => [...prevPokemons, pokemonToAdd]);
  }

  const displayedPokemons = search
    ? pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      )
    : pokemons;

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={addPokemon} />
      <br />
      <Search search={search} onSearchChange={setSearch} />
      <br />
      <PokemonCollection pokemons={displayedPokemons} />
    </Container>
  );
}

export default PokemonPage;
