import { ReactNode } from 'react';

import { Background } from '../background/Background';
import NavBar from '../templates/NavBar';

type Props = {
  children: ReactNode;
};

const PostLayout = ({ children }: Props) => (
  <div>
    <Background color="bg-gray-900">
      <NavBar />
    </Background>
    {children}
  </div>
);

export { PostLayout };
