import { Icon } from '@iconify-icon/solid';
import { A } from '@solidjs/router';
import { Component } from 'solid-js';
import { SimplePokemon } from '~/types';
interface PokemonCardProps {
  pokemon: SimplePokemon;
}

const PokemonCard: Component<PokemonCardProps> = (props) => {
  return (
    <div class='mx-auto right-0 mt-2 w-60'>
      <div class='bg-white rounded overflow-hidden shadow-lg'>
        <div class='flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b'>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`}
            alt={props.pokemon.name}
            width={100}
            height={100}
          />
          <p class='pt-2 text-lg font-semibold text-gray-50 capitalize'>
            {props.pokemon.name}
          </p>
          <div class='mt-5'>
            <A
              href={`/dashboard/pokemon/${props.pokemon.id}`}
              class='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'
            >
              Mais detalhes...
            </A>
          </div>
        </div>
        <div>
          <A href='/dashboard/main' class='px-4 py-2 hover:bg-gray-100 flex'>
            <div class='text-red-600'>
              <Icon icon='line-md:heart' width='24' height='24' />
            </div>
            <div class='pl-3'>
              <p class='text-sm font-medium text-gray-800 leading-none items-center'>
                Favorito
              </p>
              <p class='text-xs text-gray-500'>View your campaigns</p>
            </div>
          </A>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
