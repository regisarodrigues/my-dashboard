import { Icon } from '@iconify-icon/solid';
import { A, useLocation } from '@solidjs/router';
import { Component } from 'solid-js';

interface PropsSidebarMenuItem {
  path: string;
  icon: string;
  title: string;
  subTitle: string;
}

const SidebarMenuItem: Component<PropsSidebarMenuItem> = (props) => {
  const location = useLocation();
  return (
    <A
      href={props.path}
      class={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-sky-600 transition ease-linear duration-150 ${
        location.pathname === props.path ? 'bg-sky-800' : ''
      }`}
    >
      <div>
        <Icon icon={props.icon} width='24' height='24' />
      </div>
      <div class='flex flex-col'>
        <span class='text-lg font-bold leading-5 text-white'>
          {props.title}
        </span>
        <span class='text-sm text-white/50 hidden md:block'>
          {props.subTitle}
        </span>
      </div>
    </A>
  );
};

export default SidebarMenuItem;
