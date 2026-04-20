import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Globe2, Cpu, Lock, MapPin, TrendingUp } from "lucide-react";

const points = [
  { icon: Globe2, title: "Built for Africa", text: "Designed around real Kenyan workflows — from rural clinics to smallholder farms." },
  { icon: Cpu, title: "AI-Powered Platform", text: "From diagnostics to crop intelligence — AI is embedded across every product." },
  { icon: Lock, title: "Security-First Architecture", text: "Encryption, audits, and ODPC compliance baked in from day one." },
  { icon: MapPin, title: "Local + Global Standards", text: "Local expertise paired with international engineering and compliance practices." },
  { icon: TrendingUp, title: "Scalable Across Markets", text: "Architected to expand across Africa and serve the diaspora globally." },
];

export const WhyUs = () => {
  return (
    <section id="why" className="py-24">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Why RiftNova"
          title="Why partners choose us."
          description="A rare combination of deep local insight, technical depth, and an integrated product approach."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold">{p.title}</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
