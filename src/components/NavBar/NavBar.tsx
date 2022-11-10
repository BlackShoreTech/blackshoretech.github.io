import Link from 'next/link';

import { Logo } from '../Logo';

const NavBar = () => (
  <nav className="bg-gray-900/80 backdrop-blur-sm flex flex-wrap border-b-gray-800 border-b justify-between items-center px-8 py-2 drop-shadow-lg fixed w-full z-10">
    <div>
      <Link href="/">
        <Logo />
      </Link>
    </div>
    <ul className="navbar flex items-center font-medium text-xl text-gray-300">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About us</Link>
      </li>
      <li>
        <a
          onClick={() => {
            window.scrollBy({
              top: window.innerHeight,
              behavior: 'smooth',
            });
          }}
        >
          Services
        </a>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
    </ul>
    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </nav>
);

export default NavBar;
