import Hero from "./components/Hero";
import Features from "./components/Features";
import TrustBar from "./components/TrustBar";
import TabletPortal from "./components/TabletPortal";
import ProcessSteps from "./components/ProcessSteps";
import PainPoints from "./components/PainPoints";
import Vergleich from "./components/Vergleich";
import Pricing from "./components/Pricing";
import PartnerTeaser from "./components/PartnerTeaser";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Features />
      <TabletPortal />
      <TrustBar />
      <ProcessSteps />
      <Vergleich />
      <Pricing />
      <PartnerTeaser />
      <ContactForm />
    </>
  );
}
