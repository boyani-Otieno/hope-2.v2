import "./mabadiliko.css";
import HomeMaba from "./homeMaba";
import AboutMaba from "./aboutMaba";
import Work from "./work";
import TestimonialMaba from "./testimonialMaba";
import ContactMaba from "./contactMaba";
import Footer from '../footer'
import HomeMB from "./homeMB";
import NavMaba from "./navMaba";

function mabadiliko() {
  return (
    <div className="App">
      <NavMaba />
      <HomeMB />
      <HomeMaba />
      <AboutMaba />
      <Work />
      <TestimonialMaba />
      <ContactMaba />
      <Footer />
    </div>
  );
}

export default mabadiliko;
