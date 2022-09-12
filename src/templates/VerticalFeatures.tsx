import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section title="Our Services">
    <VerticalFeatureRow
      title="Fractional / Part-Time CTO"
      description="Are you in need of a part-time CTO? Do you have a start-up that is in need of technical leadership but can't afford a full-time CTO? Look no further! I offer part-time CTO services that will provide you with the technical leadership you need at a fraction of the cost."
      image="/assets/images/charts.svg"
      imageAlt="First feature alt text"
      className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
    />
    <VerticalFeatureRow
      title="Full-Stack Development"
      description="Our full stack development service offers a comprehensive approach to web development 
      that covers everything from the initial planning stages to the final launch of your site."
      image="/assets/images/coding.svg"
      imageAlt="Second feature alt text"
      reverse
      className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
    />
    <VerticalFeatureRow
      title="Automation"
      description="We can automate your business processes to help you focus on your core business goals."
      image="/assets/images/wireframe.svg"
      imageAlt="Third feature alt text"
      className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
    />
  </Section>
);

export { VerticalFeatures };
