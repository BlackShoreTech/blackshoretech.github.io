import { ReactNode } from 'react';

import { Footer } from '../components/footer/Footer';
import NavBar from '../components/NavBar/NavBar';

type Props = {
  children: ReactNode;
};

const PostLayout = ({ children }: Props) => (
  <div className="flex flex-col min-h-screen antialiased text-gray-600">
    <header className="h-14 bg-gray-900">
      <NavBar />
    </header>
    <main className="grow">{children}</main>
    <footer>
      <Footer />
    </footer>
  </div>
);

export { PostLayout };
