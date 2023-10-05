import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  return (
    <>
      <Card.Group itemsPerRow={6}>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            hp={pokemon.hp}
            // Add a conditional check for the sprites object
            frontImgUrl={pokemon.sprites ? pokemon.sprites.front : ""}
            backImgUrl={pokemon.sprites ? pokemon.sprites.back : ""}
          />
        ))}
      </Card.Group>
    </>
  );
}

export default PokemonCollection;
