import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Solutions } from "@/components/site/Solutions";
import { Stats } from "@/components/site/Stats";
import { WhyUs } from "@/components/site/WhyUs";
import { Roadmap } from "@/components/site/Roadmap";
import { Team } from "@/components/site/Team";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solutions />
        <Stats />
        <WhyUs />
        <Roadmap />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
