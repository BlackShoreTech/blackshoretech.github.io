import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Button } from './Button';
import { HeroOneButton } from './HeroOneButton';
import { Section } from './Section';

type IProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Hero = ({ className }: IProps) => (
  <div
    className={`relative bg-[url('/assets/images/background.svg')] bg-no-repeat bg-cover bg-fixed bg-[position:left_50vh] min-h-screen top-0 left-0 h-2/4 ${className} z-0`}
  >
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
);

export { Hero };
