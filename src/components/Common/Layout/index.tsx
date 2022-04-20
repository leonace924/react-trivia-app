import React from 'react';

type LayoutProps = {
  title?: string;
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="flex flex-col flex-1 h-full min-h-screen px-4 py-6 bg-gray lg:px-8 lg:py-10">
        {children}
      </main>

      <footer></footer>
    </>
  );
};
