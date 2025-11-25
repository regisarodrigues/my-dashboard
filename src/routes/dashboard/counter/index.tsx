import { Title } from '@solidjs/meta';
import { Component, createSignal } from 'solid-js';

const CounterPage: Component = () => {
  const [counter, setCounter] = createSignal(0);
  return (
    <div class='w-full h-full flex flex-col items-center justify-center'>
      <Title>Simples Contador</Title>
      <span class='text-2xl font-bold text-sky-900'>Contador Simples</span>
      <p class='text-2xl font-bold text-sky-900 mt-4 flex items-center'>
        Contador: <span class='ml-2 text-sky-700 text-4xl'>{counter()}</span>
      </p>
      <div class='flex mt-4'>
        <button
          class='flex items-center justify-center p-2 rounded-2xl bg-sky-900 font-black text-white hover:bg-sky-700 transition-all w-[100px] mr-2'
          onClick={() => setCounter(counter() - 1)}
        >
          -1
        </button>
        <button
          class='flex items-center justify-center p-2 rounded-2xl bg-sky-900 font-black text-white hover:bg-sky-700 transition-all w-[100px] mr-2'
          onClick={() => setCounter(counter() + 1)}
        >
          +1
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
