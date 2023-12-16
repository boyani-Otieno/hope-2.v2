import "./mabadiliko.css";
import HomeMaba from "./homeMaba";
import AboutMaba from "./aboutMaba";
import Work from "./work";
import TestimonialMaba from "./testimonialMaba";
import ContactMaba from "./contactMaba";
//import Footer from "./Components/Footer";

function mabadiliko() {
  return (
    <div className="App">
      <HomeMaba />
      <AboutMaba />
      <Work />
      <TestimonialMaba />
      <ContactMaba />
      {/* <Footer /> */}
    </div>
  );
}

export default mabadiliko;
