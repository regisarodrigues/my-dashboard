import { Accessor, Component, For } from 'solid-js';
import { SimplePokemon } from '~/types';
import PokemonCard from './PokemonCard';
interface PokemonGridProps {
  pokemons: Accessor<SimplePokemon[] | undefined>;
}

const PokemonGrid: Component<PokemonGridProps> = (props) => {
  return (
    <div class='flex flex-wrap gap-10 items-center justify-center'>
      <For each={props.pokemons()}>
        {(pokemon) => <PokemonCard pokemon={pokemon} />}
      </For>
    </div>
  );
};

export default PokemonGrid;
