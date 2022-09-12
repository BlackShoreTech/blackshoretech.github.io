import { Background } from '../background/Background';
import { Button } from '../components/Button';
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
            <span className="text-primary-100 text-2xl">
              We turn your big ideas into reality - quickly, efficiently, and
              affordably.
            </span>
          }
          button={
            <Button
              xl
              onClick={() => {
                window.scrollTo({ top: 10000, behavior: 'smooth' });
              }}
            >
              Contact Us
            </Button>
          }
        />
      </Section>
    </div>
  </Background>
);

export { Hero };
