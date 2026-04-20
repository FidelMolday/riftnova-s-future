import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { HeartPulse, Sprout, ShieldAlert, Layers } from "lucide-react";

const items = [
  { icon: HeartPulse, title: "Healthcare Crisis", text: "Rural communities travel hours for care, records are paper-based, and telemedicine adoption is low." },
  { icon: Sprout, title: "Agriculture Gap", text: "Farmers lack crop insights, financing, and market data — causing over 30% post-harvest losses." },
  { icon: ShieldAlert, title: "Cybersecurity Risks", text: "Clinics, SACCOs, and SMEs store sensitive data without proper protection or compliance." },
  { icon: Layers, title: "No Unified Solution", text: "Existing startups solve one problem only. RiftNova combines all three into one integrated platform." },
];

export const Problem = () => {
  return (
    <section className="py-24 bg-muted/40">
      <div className="container-tight">
        <SectionHeading
          eyebrow="The Problem"
          title="Africa's biggest gaps, solved together."
          description="Disconnected solutions create disconnected outcomes. RiftNova unifies the three challenges holding emerging markets back."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl bg-card border border-border p-6 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
