import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';
import { Contactform } from './ContactForm';

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
