import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Card } from "@/components/ui/card";
import { Rocket, Globe2, Building2, TrendingUp, ShieldCheck, Trophy } from "lucide-react";

const milestones = [
  {
    year: "2026",
    icon: Rocket,
    title: "Eldoret Launch",
    points: [
      "Launch RiftHealth pilot with 10 clinics",
      "Onboard 5,000 farmers to RiftFarm",
      "Deliver RiftSecure to 25 SACCOs and SMEs",
    ],
  },
  {
    year: "2027",
    icon: Building2,
    title: "Kenya + East Africa Expansion",
    points: [
      "Scale to Nairobi, Kisumu, Mombasa",
      "Cross-border launch in Uganda and Rwanda",
      "Reach 100K active platform users",
    ],
  },
  {
    year: "2028+",
    icon: Globe2,
    title: "Global Scale",
    points: [
      "Pan-African coverage across 10 countries",
      "Diaspora-facing services from Grand Rapids",
      "Open API platform for partners",
    ],
  },
];

const goToMarket = [
  { phase: "Phase 1 (0-6 months)", detail: "Launch RiftShield cybersecurity consulting in Nairobi — build credibility and cash flow" },
  { phase: "Phase 2 (6-12 months)", detail: "Beta launch RiftHealth with 3-5 partner clinics in Nairobi/Nakuru" },
  { phase: "Phase 3 (12-18 months)", detail: "Launch RiftFarm pilot with 500 farmers in Rift Valley region" },
  { phase: "Phase 4 (18-36 months)", detail: "Scale across Kenya, expand to Uganda, Tanzania, Rwanda" },
];

const competitiveAdvantage = [
  { icon: ShieldCheck, text: "Only platform combining cybersecurity + health + agri in one ecosystem" },
  { icon: Globe2, text: "Founder's triple-degree background (Kenya + China + USA) gives unique global-local insight" },
  { icon: TrendingUp, text: "Built natively for African infrastructure — offline-first, mobile-first, USSD-compatible" },
  { icon: Trophy, text: "Deep trust advantage as a Kenyan-founded, women-led startup" },
];

const RoadmapPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Roadmap"
        title="Our path from Eldoret to the world"
        description="A clear, ambitious, multi-phase roadmap building toward category-defining African infrastructure."
      />

      <section className="py-20 lg:py-28">
        <div className="container-tight">
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-px bg-border" aria-hidden />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative pl-14 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-12"
                >
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-1 h-9 w-9 rounded-full bg-gradient-primary text-primary-foreground inline-flex items-center justify-center shadow-glow">
                    <m.icon className="h-4 w-4" />
                  </div>

                  <div className={`${i % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:col-start-2 lg:pl-12"}`}>
                    <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      {m.year}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-secondary">{m.title}</h3>
                    <ul className={`mt-4 space-y-2 text-sm text-muted-foreground ${i % 2 === 0 ? "lg:ml-auto" : ""}`}>
                      {m.points.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-2 lg:justify-start">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-muted/40">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Go-to-Market"
            title="Our phased market entry strategy"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {goToMarket.map((g, i) => (
              <motion.div
                key={g.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Card className="p-7 h-full border-border hover:border-primary/40 hover:shadow-card transition-all">
                  <h3 className="font-display text-lg font-semibold text-secondary">{g.phase}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.detail}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Competitive Advantage"
            title="Why RiftNova wins"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {competitiveAdvantage.map((c, i) => (
              <motion.div
                key={c.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Card className="p-7 h-full border-border hover:border-primary/40 hover:shadow-card transition-all text-center">
                  <div className="h-11 w-11 rounded-md bg-primary/10 text-primary inline-flex items-center justify-center mb-5">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
};

export default RoadmapPage;
