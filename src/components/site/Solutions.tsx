import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Stethoscope, Leaf, ShieldCheck, Check } from "lucide-react";

const solutions = [
  {
    icon: Stethoscope,
    name: "RiftHealth",
    tagline: "AI-powered healthcare access",
    features: ["Telemedicine consultations", "AI-powered diagnostics", "Electronic health records", "Medicine delivery", "NHIF integration"],
  },
  {
    icon: Leaf,
    name: "RiftFarm",
    tagline: "Smart agriculture for every farmer",
    features: ["AI crop monitoring", "Market price alerts", "Farmer credit access", "Supply chain links", "WhatsApp-first experience"],
    featured: true,
  },
  {
    icon: ShieldCheck,
    name: "RiftSecure",
    tagline: "Enterprise-grade cybersecurity",
    features: ["Security audits", "Compliance & ODPC support", "Encrypted records", "Cybersecurity training", "Penetration testing"],
  },
];

export const Solutions = () => {
  return (
    <section id="solutions" className="py-24">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Our Solutions"
          title="Three products. One unified platform."
          description="Built modular, deployed together — RiftNova's product suite shares data, identity, and security across every layer."
        />
        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                s.featured
                  ? "bg-gradient-primary text-primary-foreground border-transparent shadow-elevated"
                  : "bg-card border-border shadow-card hover:shadow-elevated"
              }`}
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                  s.featured ? "bg-primary-foreground/15 text-primary-foreground" : "bg-accent text-accent-foreground"
                }`}
              >
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{s.name}</h3>
              <p className={`mt-1 text-sm ${s.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{s.tagline}</p>
              <ul className="mt-6 space-y-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${s.featured ? "text-primary-foreground" : "text-primary"}`} />
                    <span className={s.featured ? "text-primary-foreground/95" : "text-foreground/80"}>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
