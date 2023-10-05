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

  const displayedPokemons = search
    ? pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      )
    : pokemons;

  function addPokemon(newPokemon) {
    setPokemons((prevPokemons) => [...prevPokemons, newPokemon]);
  }

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
