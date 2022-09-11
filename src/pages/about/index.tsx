import { Background } from '../../background/Background';
import { Meta } from '../../layout/Meta';
import { Footer } from '../../templates/Footer';
import NavBar from '../../templates/NavBar';
import { AppConfig } from '../../utils/AppConfig';

const About = () => (
  <div className="antialiased text-gray-900">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Background color="bg-gray-900">
      <NavBar />
    </Background>
    About
    <Footer />
  </div>
);

export default About;
