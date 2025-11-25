import { Icon } from '@iconify-icon/solid';
import { Component, For } from 'solid-js';
import SidebarMenuItem from './SidebarMenuItem';

const menuItems = [
  {
    path: '/dashboard/main',
    icon: 'carbon:dashboard-reference',
    title: 'Dashboard',
    subTitle: 'My Dashboard',
  },
  {
    path: '/dashboard/counter',
    icon: 'fluent:counter-24-regular',
    title: 'Counter',
    subTitle: 'Simples Contador',
  },
  {
    path: '/dashboard/pokemons',
    icon: 'ic:twotone-catching-pokemon',
    title: 'Pokemon',
    subTitle: 'Lista de Pokemons',
  },
];

const Sidebar: Component = () => {
  return (
    <div
      id='menu'
      class='bg-gray-900 min-h-screen z-10 text-slate-300 w-96 left-0 h-screen overflow-y-scroll'
    >
      <div id='logo' class='my-4 px-6'>
        <h1 class='flex items-center  text-lg md:text-2xl font-bold text-white'>
          <Icon icon='logos:solidjs-icon' class='mr-2' />
          <span>Dash</span>
          <span class='text-blue-300'>8</span>.
        </h1>
        <p class='text-slate-500 text-sm'>Manage your actions and activities</p>
      </div>
      <div id='profile' class='px-6 py-10'>
        <p class='text-slate-500'>Welcome back,</p>

        <a href='#' class='inline-flex space-x-2 items-center'>
          <span>
            <img class='rounded-full w-10 h-10' src='/avatar.png' alt='' />
          </span>
          <span class='text-sm md:text-base font-bold'>Regis Rodrigues</span>
        </a>
      </div>
      {/* Navigation */}
      <div id='nav' class='w-full px-6'>
        <For each={menuItems}>{(item) => <SidebarMenuItem {...item} />}</For>
      </div>
    </div>
  );
};
export default Sidebar;
