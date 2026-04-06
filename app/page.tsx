import Hero from "./components/Hero";
import Features from "./components/Features";
import ProcessSteps from "./components/ProcessSteps";
import PainPoints from "./components/PainPoints";
import Vergleich from "./components/Vergleich";
import Pricing from "./components/Pricing";
import TrustSection from "./components/TrustSection";
import PartnerTeaser from "./components/PartnerTeaser";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />          {/* white          */}
      <PainPoints />    {/* slate-950 dark  */}
      <Features />      {/* white          */}
      <Vergleich />     {/* slate-50       */}
      <ProcessSteps />  {/* white          */}
      <Pricing />       {/* slate-50       */}
      <TrustSection />  {/* white          */}
      <PartnerTeaser /> {/* slate-50       */}
      <FAQ />           {/* white          */}
      <ContactForm />   {/* slate-50       */}
    </>
  );
}
