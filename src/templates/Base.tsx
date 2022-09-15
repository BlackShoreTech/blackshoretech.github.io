import Image from 'next/image';

import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import NavBar from './NavBar';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta
      title={`Blog - ${AppConfig.title}`}
      description={AppConfig.description}
      images={[{ url: '/assets/logo.svg' }]}
      twitter={{
        handle: '@brsc2909',
        site: '@brsc2909',
        cardType: 'summary_large_image',
      }}
    />
    <Background color="bg-gray-900">
      <NavBar />
    </Background>
    <Hero />

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
    </Section>
    <div className="bg-gray-900 bg-[url('/assets/images/map.svg')] bg-no-repeat bg-cover bg-fixed top-0 left-0">
      <VerticalFeatures />
    </div>
    <Banner />
    <Footer />
  </div>
);

export { Base };
