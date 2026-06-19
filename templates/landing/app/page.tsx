import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { WhyItExists } from "../components/WhyItExists";
import { HowItWorks } from "../components/HowItWorks";
import { FAQ } from "../components/FAQ";
import { Testimonials } from "../components/Testimonials";
import { Benefits } from "../components/Benefits";
import { Manifesto } from "../components/Manifesto";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhyItExists />
        <HowItWorks />
        <FAQ />
        <Testimonials />
        <Benefits />
        <Manifesto />
        <Contact />
      </main>
      <footer className="bg-paper border-t border-ink/10 px-6 py-8 text-center text-sm text-ink/40">
        Love Letter · © 2026 Love Letter Berlin · hello@loveletter.berlin
      </footer>
    </>
  );
}
