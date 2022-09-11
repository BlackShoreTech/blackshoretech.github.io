import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-900">
    <div className="relative bg-[url('/assets/images/background.svg')] bg-no-repeat bg-cover bg-fixed bg-[position:left_15rem] top-0 left-0 h-1/4">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo />}>
          <li>
            <Link href="/">
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
      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              <span className="text-primary-100">{'BLACKSHORE \n'}</span>
              <span className="text-lime-300 text-4xl">TECHNOLOGY</span>
            </>
          }
          description={
            <span className="text-primary-100">
              The easiest way to build a React landing page in seconds.
            </span>
          }
          button={
            <Link href="https://creativedesignsguru.com/category/nextjs/">
              <a>
                <Button xl>Contact Us</Button>
              </a>
            </Link>
          }
        />
      </Section>
    </div>
  </Background>
);

export { Hero };
