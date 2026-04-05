import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Features from "./components/Features";
import TrustBar from "./components/TrustBar";
import TabletPortal from "./components/TabletPortal";
import ProcessSteps from "./components/ProcessSteps";
import Pricing from "./components/Pricing";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PainPoints />
      <Features />
      <TrustBar />
      <TabletPortal />
      <ProcessSteps />
      <Pricing />
      <About />
      <ContactForm />
      <Footer />
    </>
  );
}
