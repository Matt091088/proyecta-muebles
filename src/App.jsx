import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import "./styles/Home.css";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Prices from "./components/Prices";
import FAQ from "./components/FAQ";
import WhatsAppButton from "./components/WhatsAppButton";
import Process from "./components/Process";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <Process />
      <Projects />
      <Services />
      <HowItWorks />
      <Benefits />
      <Prices />
      <WhyChooseUs />
      <FAQ />

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;