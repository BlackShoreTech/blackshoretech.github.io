import React, { ReactNode } from 'react';

import { Footer } from '../components/footer/Footer';
import NavBar from '../components/NavBar/NavBar';

interface IProps {
  children: ReactNode;
}

export function Layout({ children }: IProps) {
  return (
    <div className="flex flex-col min-h-screen antialiased text-gray-600">
      <header className="">
        <NavBar />
      </header>
      <main className="grow">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
