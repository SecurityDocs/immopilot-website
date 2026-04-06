import Hero from "./components/Hero";
import Features from "./components/Features";
import TrustBar from "./components/TrustBar";
import TabletPortal from "./components/TabletPortal";
import ProcessSteps from "./components/ProcessSteps";
import PainPoints from "./components/PainPoints";
import Pricing from "./components/Pricing";
import PartnerTeaser from "./components/PartnerTeaser";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <TrustBar />
      <TabletPortal />
      <ProcessSteps />
      <PainPoints />
      <Pricing />
      <PartnerTeaser />
      <ContactForm />
    </>
  );
}
