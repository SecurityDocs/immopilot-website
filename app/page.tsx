import Hero from "./components/Hero";
import Features from "./components/Features";
import ProcessSteps from "./components/ProcessSteps";
import PainPoints from "./components/PainPoints";
import Vergleich from "./components/Vergleich";
import Pricing from "./components/Pricing";
import TrustSection from "./components/TrustSection";
import FAQ from "./components/FAQ";
import PartnerTeaser from "./components/PartnerTeaser";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Features />
      <Vergleich />
      <ProcessSteps />
      <Pricing />
      <TrustSection />
      <FAQ />
      <PartnerTeaser />
      <ContactForm />
    </>
  );
}
