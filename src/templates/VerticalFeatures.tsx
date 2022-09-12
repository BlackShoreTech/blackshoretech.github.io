import Image from 'next/image';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';

const VerticalFeatures = () => (
  <Section
    title="What we do"
    description="We specialize in helping startups get off the ground by developing custom software solutions that are both scalable and reliable. We will work closely with you to understand your specific needs and create a solution that meets your budget and timeline. Contact us today to learn more about how we can help you launch your tech startup."
  >
    <div className="flex-1 flex space-x-2 justify-center">
      {AppConfig.technologies.map((tech, key) => (
        <span
          key={key}
          className="border-0 rounded w-15 h-15 hover:bg-slate-200 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
        >
          <Image
            src={`/assets/images/technologies/${tech}.svg`}
            height={120}
            width={120}
            alt={`${tech} logo`}
          />
        </span>
      ))}
    </div>
    <VerticalFeatureRow
      title="Fractional / Part-Time CTO"
      description="Are you in need of a part-time CTO? Do you have a start-up that is in need of technical leadership but can't afford a full-time CTO? Look no further! I offer part-time CTO services that will provide you with the technical leadership you need at a fraction of the cost."
      image="/assets/images/charts.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Full-Stack Development"
      description="Our full stack development service offers a comprehensive approach to web development 
      that covers everything from the initial planning stages to the final launch of your site."
      image="/assets/images/coding.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Automation"
      description="We can automate your business processes to help you focus on your core business goals."
      image="/assets/images/wireframe.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
