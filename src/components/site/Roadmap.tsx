import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const milestones = [
  { year: "2026", title: "Eldoret Launch", text: "Pilot RiftHealth, RiftFarm, and RiftSecure with anchor partners across Uasin Gishu County." },
  { year: "2027", title: "Nairobi + Uganda", text: "Regional rollout across Kenya's capital and East African expansion into Uganda." },
  { year: "2028+", title: "Global Scale", text: "Expand into West Africa and diaspora markets in North America and Europe." },
];

export const Roadmap = () => {
  return (
    <section id="roadmap" className="py-24 bg-muted/40">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Roadmap"
          title="A clear path to continental impact."
          description="Phased growth grounded in deep local pilots before scaling regionally and globally."
        />
        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid md:grid-cols-3 gap-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative"
              >
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-gradient-primary shadow-glow" />
                  <span className="font-display text-2xl font-bold text-gradient">{m.year}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
