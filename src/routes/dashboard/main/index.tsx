import { Title } from '@solidjs/meta';
import { Component } from 'solid-js';

const MainDashboardPage: Component = () => {
  return (
    <>
      <Title>Dashboard</Title>
      <h1 class='text-9xl font-bold flex flex-col items-center justify-center text-sky-900 w-full h-full'>
        Dashboard Page
      </h1>
    </>
  );
};

export default MainDashboardPage;
