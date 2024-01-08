import "./mabadiliko.css";
import HomeMaba from "./homeMaba";
import AboutMaba from "./aboutMaba";
import Work from "./work";
import Testimonials from "./testimonialMaba";
import ContactMaba from "./contactMaba";
import Footer from '../footer'
import HomeMB from "./homeMB";
import NavMaba from "./navMaba";
import Images from './images';

function mabadiliko() {
  return (
    <div className="App">
      <NavMaba />
      <HomeMB />
      <HomeMaba />
      <AboutMaba />
      <Work />
      <Images />
      <Testimonials />
      <ContactMaba />
      <Footer />
    </div>
  );
}

export default mabadiliko;
