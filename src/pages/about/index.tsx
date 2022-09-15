import { Background } from '../../background/Background';
import { Meta } from '../../layout/Meta';
import { Footer } from '../../templates/Footer';
import NavBar from '../../templates/NavBar';
import { AppConfig } from '../../utils/AppConfig';

const About = () => (
  <div className="antialiased text-gray-900">
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
    <Background color="bg-gray-900">
      <NavBar />
    </Background>
    About
    <Footer />
  </div>
);

export default About;
