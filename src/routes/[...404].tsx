import { Title } from '@solidjs/meta';
import { A } from '@solidjs/router';

export default function NotFound() {
  return (
    <main class='h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]'>
      <Title>Not Found</Title>
      <h1 class='text-9xl font-extrabold text-white tracking-widest'>404</h1>
      <div class='bg-sky-500 px-2 text-sm rounded rotate-12 absolute'>
        Page Not Found
      </div>
      <button class='mt-5'>
        <A
          href='/'
          class='relative inline-block text-sm font-medium text-sky-500 group active:text-sky-500 focus:outline-none focus:ring'
        >
          <span class='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-sky-500 group-hover:translate-y-0 group-hover:translate-x-0'></span>

          <span class='relative block px-8 py-3 bg-[#1A2238] border border-current'>
            Go Home
          </span>
        </A>
      </button>
    </main>
  );
}
