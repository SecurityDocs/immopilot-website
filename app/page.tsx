import Hero from "./components/Hero";
import Features from "./components/Features";
import ProcessSteps from "./components/ProcessSteps";
import PainPoints from "./components/PainPoints";
import Vergleich from "./components/Vergleich";
import Pricing from "./components/Pricing";
import PartnerTeaser from "./components/PartnerTeaser";
import FAQ from "./components/FAQ";
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
      <PartnerTeaser />
      <FAQ />
      <ContactForm />
    </>
  );
}
