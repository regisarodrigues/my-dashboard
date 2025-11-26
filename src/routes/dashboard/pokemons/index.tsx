import { Title } from '@solidjs/meta';
import { createAsync, query } from '@solidjs/router';
import { Component } from 'solid-js';
import PokemonGrid from '~/components/pokemon/PokemonGrid';
import { PokemonsResponse, SimplePokemon } from '~/types';

// cria a query — name é "pokemons"
const getPokemons = query(
  async (limit: number, offset: number): Promise<SimplePokemon[]> => {
    const resPokemons: PokemonsResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    ).then((res) => res.json());
    const pokemons = resPokemons.results.map((pokemon) => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name,
    }));
    return pokemons;
  },
  'pokemons'
);

// preload opcional (use valores padrão aqui)
export const route = {
  load: () => getPokemons(151, 0),
};

const PokemonsPage: Component = () => {
  // usa createAsync com os mesmos argumentos
  const pokemons = createAsync(() => getPokemons(151, 0));
  return (
    <div class='flex flex-col'>
      <Title>Lista de Pokemons</Title>
      <p class='text-3xl font-bold flex items-center justify-center mt-2 gap-2'>
        <span class='text-red-500'>Lista</span> de{' '}
        <span class='text-white'>Pokemons</span>
      </p>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
};

export default PokemonsPage;
