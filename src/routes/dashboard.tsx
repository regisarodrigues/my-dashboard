import { Component, ParentProps } from 'solid-js';
import Sidebar from '~/components/Sidebar';

const DashboardLayout: Component = (props: ParentProps) => {
  return (
    <div class='bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white'>
      <div class='flex'>
        {/* Menu */}
        <Sidebar />

        {/* Conteúdo */}
        <div class='p-2 w-full text-slate-900'>{props.children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
