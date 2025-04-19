import Header from "./assets/header.jpg";
import About from "./Componets/About/About";
import Footer from "./Componets/Footer/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const bgImage = {
  backgroundImage: `url(${Header})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
};

import Hero from "./Componets/Hero/Hero";
import Navbar from "./Componets/Navbar/Navbar";
import Service from "./Componets/Service/Service";
import Special from "./Componets/Special/Special";
import WhyChooseUs from "./Componets/WhyChooseUs/WhyChooseUs";

const App = () => {

  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-out", offset: 40 });
  }, []);

  return (
    <div className="overflow-x-hidden font-poppins">
      <div style={bgImage} >
        <div className="bg-primary/75">
          <Navbar />
          <Hero />
        </div>
      </div>
      <Service />
      <About />
      <WhyChooseUs />
      <Special />
      <Footer />
    </div>
  );
};

export default App;
