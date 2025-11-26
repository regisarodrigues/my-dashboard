import { useParams } from '@solidjs/router';
import { Component } from 'solid-js';

const PokemonPage: Component = () => {
  const params = useParams();
  return (
    <div>
      <h1>Pokemon id: {params.id}</h1>
    </div>
  );
};
export default PokemonPage;
