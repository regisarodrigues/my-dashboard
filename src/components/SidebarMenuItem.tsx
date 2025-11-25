import { Icon } from '@iconify-icon/solid';
import { Component } from 'solid-js';
interface PropsSidebarMenuItem {
  path: string;
  icon: string;
  title: string;
  subTitle: string;
}

const SidebarMenuItem: Component<PropsSidebarMenuItem> = (props) => {
  return (
    <a
      href={props.path}
      class='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150'
    >
      <div>
        <Icon icon={props.icon} class='w-12 h-12' />
      </div>
      <div class='flex flex-col'>
        <span class='text-lg font-bold leading-5 text-white'>
          {props.title}
        </span>
        <span class='text-sm text-white/50 hidden md:block'>
          {props.subTitle}
        </span>
      </div>
    </a>
  );
};

export default SidebarMenuItem;
