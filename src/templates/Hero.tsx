import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import NavBar from './NavBar';

const Hero = () => (
  <Background color="bg-gray-900">
    <NavBar />
    <div className="relative bg-[url('/assets/images/background.svg')] bg-no-repeat bg-cover bg-fixed bg-[position:left_15rem] top-0 left-0 h-1/4">
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
              This website is still under construction. Pay no attention to the
              Lorum Ipsum :)
            </span>
          }
          button={
            <Link href="mailto:brendan@blackshoretech.com">
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
