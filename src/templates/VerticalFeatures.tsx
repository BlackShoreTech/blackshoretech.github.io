import Image from 'next/image';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';

const VerticalFeatures = () => (
  <Section
    title="What we do"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
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
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Web Development"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Backend Development"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
