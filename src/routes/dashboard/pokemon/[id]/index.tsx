import { Title } from '@solidjs/meta';
import { createAsync, query, useParams } from '@solidjs/router';
import { Component, Suspense } from 'solid-js';
import { Pokemon } from '~/types';

const getPokemon = query(async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
    (res) => res.json()
  );
  return pokemon;
}, 'pokemon');

function capitalize(str: string = '') {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const PokemonPage: Component = () => {
  // TIPANDO OS PARAMS
  const params = useParams<{ id: string }>();

  const pokemon = createAsync(() => getPokemon(params.id));

  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <>
        <Title>
          #{params.id} - {capitalize(pokemon()?.name)}
        </Title>

        <div class='flex mt-5 flex-col items-center text-slate-800'>
          <div class='relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3'>
            <div class='mt-2 mb-8 w-full'>
              <h1 class='px-2 text-xl font-bold text-slate-700 capitalize'>
                #{pokemon()?.id} {pokemon()?.name}
              </h1>
              <div class='flex flex-col justify-center items-center'>
                <img
                  src={
                    pokemon()?.sprites.other?.dream_world.front_default ?? ''
                  }
                  width={150}
                  height={150}
                  alt={`Imagen del pokemon ${pokemon()?.name}`}
                  class='mb-5'
                />

                <div class='flex flex-wrap'>
                  {pokemon()?.moves.map((move) => (
                    <p class='mr-2 capitalize'>{move.move.name}</p>
                  ))}
                </div>
              </div>
            </div>
            <div class='grid grid-cols-2 gap-4 px-2 w-full'>
              <div class='flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg '>
                <p class='text-sm text-gray-600'>Types</p>
                <div class='text-base font-medium text-navy-700 flex'>
                  {pokemon()?.types.map((type) => (
                    <p class='mr-2 capitalize'>{type.type.name}</p>
                  ))}
                </div>
              </div>

              <div class='flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg '>
                <p class='text-sm text-gray-600'>Peso</p>
                <span class='text-base font-medium text-navy-700 flex'>
                  {pokemon()?.weight}
                </span>
              </div>

              <div class='flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg'>
                <p class='text-sm text-gray-600'>Regular Sprites</p>
                <div class='flex justify-center'>
                  <img
                    src={pokemon()?.sprites.front_default}
                    width={100}
                    height={100}
                    alt={`sprite ${pokemon()?.name}`}
                  />

                  <img
                    src={pokemon()?.sprites.back_default}
                    width={100}
                    height={100}
                    alt={`sprite ${pokemon()?.name}`}
                  />
                </div>
              </div>

              <div class='flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg'>
                <p class='text-sm text-gray-600'>Shiny Sprites</p>
                <div class='flex justify-center'>
                  <img
                    src={pokemon()?.sprites.front_shiny}
                    width={100}
                    height={100}
                    alt={`sprite ${pokemon()?.name}`}
                  />

                  <img
                    src={pokemon()?.sprites.back_shiny}
                    width={100}
                    height={100}
                    alt={`sprite ${pokemon.name}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Suspense>
  );
};

export default PokemonPage;
