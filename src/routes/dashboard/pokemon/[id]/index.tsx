import { createAsync, query, useParams } from '@solidjs/router';
import { Component } from 'solid-js';

const getPokemon = query(async (id: string) => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
    (res) => res.json()
  );
  return pokemon;
}, 'pokemon');

const PokemonPage: Component = () => {
  const params = useParams();
  const pokemon = createAsync(() => getPokemon(params.id!));

  return (
    <div>
      <h1>Pokemon id: {params.id}</h1>
    </div>
  );
};

export default PokemonPage;
