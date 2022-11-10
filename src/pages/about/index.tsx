import { Section } from '../../components/Section';
import DefaultLayout from '../../layouts/DefaultLayout';
import { Meta } from '../../layouts/Meta';
import { AppConfig } from '../../utils/AppConfig';

const About = () => (
  <>
    <Meta
      title={`About - ${AppConfig.title}`}
      description={AppConfig.description}
      images={[{ url: '/assets/logo.svg' }]}
      twitter={{
        handle: '@brsc2909',
        site: '@brsc2909',
        cardType: 'summary_large_image',
      }}
    />
    <Section>Nothing to see here... Yet</Section>
  </>
);
About.PageLayout = DefaultLayout;
export default About;
