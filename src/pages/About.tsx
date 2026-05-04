import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Target, Eye, MapPin, Globe2, Sparkles, ShieldCheck, DollarSign } from "lucide-react";

const pillars = [
  { icon: Target, title: "Mission", text: "To build world-class secure digital infrastructure for Africa's most vital sectors — so that every farmer, every patient, and every business can thrive safely in the digital economy." },
  { icon: Eye, title: "Vision", text: "A digitally secure Africa where technology is a tool of empowerment, not a source of vulnerability." },
  { icon: Sparkles, title: "Why Africa", text: "The world's youngest, fastest-growing digital economy — a market of compounding opportunity." },
  { icon: MapPin, title: "Why Eldoret", text: "A strategic agritech and healthcare hub at the heart of the Rift Valley corridor." },
  { icon: Globe2, title: "Global Scale", text: "From Eldoret to East Africa to the diaspora — building globally relevant infrastructure." },
  { icon: ShieldCheck, title: "Security First", text: "Compliance and encryption are not features — they are the foundation of everything we build." },
];

const revenueStreams = [
  {
    name: "SaaS Subscriptions",
    detail: "Monthly/annual plans for RiftShield, RiftHealth, and RiftFarm. Tiered pricing: Starter (SMEs/small clinics), Growth (mid-size), Enterprise (hospitals, government).",
    est: "Core recurring revenue",
  },
  {
    name: "Security Audits & Consulting",
    detail: "One-time and retainer-based cybersecurity assessments for hospitals, banks, NGOs, and government agencies.",
    est: "High-margin services revenue",
  },
  {
    name: "Data & Insights (AgriTech)",
    detail: "Anonymized agricultural data sold to financial institutions, insurers, and government bodies for crop financing and policy decisions.",
    est: "Scalable data revenue",
  },
  {
    name: "Transaction Fees (RiftFarm)",
    detail: "Small percentage fee on farmer-to-market transactions and financial service referrals processed through the platform.",
    est: "Volume-based revenue",
  },
  {
    name: "Government & NGO Contracts",
    detail: "Bulk licensing and implementation contracts with county health departments, agricultural ministries, and development organizations.",
    est: "Large contract revenue",
  },
];

const About = () => {
  return (
    <>
      <PageHero
        eyebrow="About RiftNova"
        title="Built in Africa. Built for the World."
        description="We're a team of engineers, doctors, agronomists, and security experts building the infrastructure Africa's next decade depends on."
      />

      <section className="py-20 lg:py-28">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
                Our Story
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-secondary leading-tight">
                A platform born from real African challenges
              </h2>
              <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  RiftNova began in Eldoret, Kenya, where our founders saw the same story repeat across clinics, farms, and small businesses: brilliant people held back by fragmented, insecure, paper-bound systems.
                </p>
                <p>
                  We made a bet that the future of African technology isn't single-purpose apps — it's integrated infrastructure that brings healthcare, agriculture, and security together under one trusted platform.
                </p>
                <p>
                  Today we're building that platform from two HQs — Eldoret and Grand Rapids — combining local expertise with global engineering standards.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-primary opacity-15 blur-3xl rounded-3xl" aria-hidden />
              <Card className="relative p-10 border-border shadow-card">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Tagline</p>
                    <p className="mt-2 font-display text-2xl font-bold text-secondary leading-snug">
                      Securing Health. Empowering Farmers. Built in Africa. Built for the World.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">HQ Africa</p>
                      <p className="mt-1 font-semibold text-secondary">Eldoret, Kenya</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">HQ North America</p>
                      <p className="mt-1 font-semibold text-secondary">Grand Rapids, MI</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-muted/40">
        <div className="container-tight">
          <SectionHeading
            eyebrow="What we stand for"
            title="The principles guiding everything we build"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Card className="p-7 h-full border-border hover:border-primary/40 hover:shadow-card transition-all">
                  <div className="h-11 w-11 rounded-md bg-primary/10 text-primary inline-flex items-center justify-center mb-5">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-secondary">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Business Model"
            title="How we create sustainable value"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {revenueStreams.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Card className="p-7 h-full border-border hover:border-primary/40 hover:shadow-card transition-all">
                  <div className="h-11 w-11 rounded-md bg-primary/10 text-primary inline-flex items-center justify-center mb-5">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-secondary">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
                  <p className="mt-3 text-xs font-medium text-primary">{s.est}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA 
        title="Ready to Secure Your Digital Future?"
        description="Whether you run a clinic, a farm, or a business — RiftNova has a solution built for you."
        buttonText="Get in Touch"
      />
    </>
  );
};

export default About;
