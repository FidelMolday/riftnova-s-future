import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Rocket, Globe2, Building2 } from "lucide-react";

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

const RoadmapPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Roadmap"
        title="Our path from Eldoret to the world"
        description="A clear, ambitious, three-phase roadmap building toward category-defining African infrastructure."
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
                  <div className={`absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-1 h-9 w-9 rounded-full bg-gradient-primary text-primary-foreground inline-flex items-center justify-center shadow-glow`}>
                    <m.icon className="h-4 w-4" />
                  </div>

                  <div className={`${i % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:col-start-2 lg:pl-12"}`}>
                    <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      {m.year}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-secondary">{m.title}</h3>
                    <ul className={`mt-4 space-y-2 text-sm text-muted-foreground ${i % 2 === 0 ? "lg:ml-auto" : ""}`}>
                      {m.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 lg:justify-start">
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

      <FinalCTA />
    </>
  );
};

export default RoadmapPage;
