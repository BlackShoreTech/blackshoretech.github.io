import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const NavBar = () => (
  <Section yPadding="py-3">
    <NavbarTwoColumns logo={<Logo />}>
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
    </NavbarTwoColumns>
  </Section>
);

export default NavBar;
