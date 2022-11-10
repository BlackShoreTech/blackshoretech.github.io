import Image from 'next/image';

import { Banner } from '../components/Banner';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { VerticalFeatureRow } from '../components/VerticalFeatureRow';
import DefaultLayout from '../layouts/DefaultLayout';
import { Meta } from '../layouts/Meta';
import { AppConfig } from '../utils/AppConfig';

const Home = () => (
  <>
    <Meta
      title={`${AppConfig.title}`}
      description={AppConfig.description}
      images={[{ url: '/assets/logo.svg' }]}
      twitter={{
        handle: '@brsc2909',
        site: '@brsc2909',
        cardType: 'summary_large_image',
      }}
    />
    <Hero className="bg-gray-900" />
    <Section
      title="What we do"
      description="We specialize in helping startups get off the ground by developing custom software solutions that are both scalable and reliable. We will work closely with you to understand your specific needs and create a solution that meets your budget and timeline. Contact us today to learn more about how we can help you launch your tech startup."
    >
      <div className="flex-1 flex space-x-2 justify-center">
        {AppConfig.technologies.map((tech, key) => (
          <span
            key={key}
            className="border-0 rounded-lg hover:bg-slate-200 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
          >
            <Image
              className="aspect-square"
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
    </div>
    <Banner />
  </>
);
Home.PageLayout = DefaultLayout;
export default Home;
