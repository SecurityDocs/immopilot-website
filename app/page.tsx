import Hero from "./components/Hero";
import Zielgruppen from "./components/Zielgruppen";
import PainPoints from "./components/PainPoints";
import Features from "./components/Features";
import TrustBar from "./components/TrustBar";
import TabletPortal from "./components/TabletPortal";
import ProcessSteps from "./components/ProcessSteps";
import PartnerTeaser from "./components/PartnerTeaser";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Zielgruppen />
      <PainPoints />
      <Features />
      <TrustBar />
      <TabletPortal />
      <ProcessSteps />
      <Pricing />
      <PartnerTeaser />
      <ContactForm />
    </>
  );
}
