import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Get in Touch"
      subtitle="Talk to us about a free consultation"
      button={
        <Link href="mailto:brendan@blackshoretech.com">
          <a>
            <Button>Contact Us</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
