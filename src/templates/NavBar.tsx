import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const NavBar = () => (
  <Section yPadding="py-3">
    <NavbarTwoColumns logo={<Logo />}>
      <li>
        <Link href="/about">
          <a>About us</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Services</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Blog</a>
        </Link>
      </li>
    </NavbarTwoColumns>
  </Section>
);

export default NavBar;
