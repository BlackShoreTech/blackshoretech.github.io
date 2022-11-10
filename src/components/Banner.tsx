import { CTABanner } from '../cta/CTABanner';
import { Contactform } from './ContactForm';
import { Section } from './Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Get in Touch"
      subtitle="Talk to us about a free consultation"
      content={<Contactform />}
      button={<></>}
    />
  </Section>
);

export { Banner };
