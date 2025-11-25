import { Title } from '@solidjs/meta';
import { Component } from 'solid-js';

const MainDashboardPage: Component = () => {
  return (
    <div class='w-full h-full flex flex-col items-center justify-center'>
      <Title>Dashboard</Title>
      <h1 class='text-7xl font-bold text-sky-900'>Dashboard Page</h1>
    </div>
  );
};

export default MainDashboardPage;
