import { CTA } from "../components/landing/CTA";
import { CurriculumPreview } from "../components/landing/CurriculumPreview";
import { Header } from "../components/landing/Header";
import { Hero } from "../components/landing/Hero";
import { HowItWorks } from "../components/landing/HowItWorks";
import { Playground } from "../components/landing/Playground";

export function Landing() {
  return (
    <main className="overflow-x-hidden bg-surface">
      <Header />
      <Hero />
      <HowItWorks />
      <Playground />
      <CurriculumPreview />
      <CTA />
    </main>
  );
}
