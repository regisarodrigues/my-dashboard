import { Title } from '@solidjs/meta';
import { Component } from 'solid-js';

const PokemonPage: Component = () => {
  return (
    <>
      <Title>Pokemon</Title>
      <h1 class='text-2xl font-bold flex items-center justify-center'>
        Pokemon Page
      </h1>
    </>
  );
};

export default PokemonPage;
