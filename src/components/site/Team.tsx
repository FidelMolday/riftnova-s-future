import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const team = [
  { initials: "CE", role: "CEO & Security Lead", expertise: "Cybersecurity strategy, compliance, enterprise architecture." },
  { initials: "AI", role: "AI & Data Lead", expertise: "Applied machine learning, diagnostics, agricultural intelligence." },
  { initials: "EN", role: "Head of Engineering", expertise: "Distributed systems, mobile-first platforms, cloud infrastructure." },
  { initials: "OP", role: "Head of Operations", expertise: "Field deployment, partnerships, regulatory engagement." },
];

export const Team = () => {
  return (
    <section id="team" className="py-24">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Our Team"
          title="Founders building for the next billion."
          description="An interdisciplinary team combining engineering, AI, security, and on-the-ground operating experience."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <motion.div
              key={m.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 text-center hover:shadow-card transition-shadow"
            >
              <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center font-display font-bold text-2xl">
                {m.initials}
              </div>
              <h3 className="mt-5 font-display font-bold">{m.role}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{m.expertise}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
