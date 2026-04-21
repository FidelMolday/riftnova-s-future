import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { ArrowRight, Check, Stethoscope, Sprout, ShieldCheck } from "lucide-react";
import healthImg from "@/assets/sector-health.jpg";
import farmImg from "@/assets/sector-farm.jpg";
import secureImg from "@/assets/sector-secure.jpg";

const products = [
  {
    id: "rifthealth",
    icon: Stethoscope,
    name: "RiftHealth",
    tagline: "AI-powered healthcare for everyone, everywhere.",
    description:
      "Modernize clinics with telemedicine, intelligent diagnostics, and unified electronic health records — built for African healthcare realities.",
    image: healthImg,
    features: [
      "Telemedicine consultations",
      "AI-powered diagnostics",
      "Electronic health records (EHR)",
      "Medicine delivery logistics",
      "NHIF integration",
    ],
    benefits: ["Reach rural patients", "Reduce admin overhead", "Improve diagnostic accuracy"],
  },
  {
    id: "riftfarm",
    icon: Sprout,
    name: "RiftFarm",
    tagline: "Smart agriculture from seed to market.",
    description:
      "Give farmers AI-grade crop intelligence, financing access, and direct market connections — over WhatsApp and the web.",
    image: farmImg,
    features: [
      "Crop disease detection",
      "Weather & yield insights",
      "Supply chain intelligence",
      "Farmer credit & financing",
      "WhatsApp-first experience",
    ],
    benefits: ["Cut post-harvest losses", "Increase farmer income", "Strengthen food security"],
  },
  {
    id: "riftsecure",
    icon: ShieldCheck,
    name: "RiftSecure",
    tagline: "Enterprise cybersecurity, made local.",
    description:
      "Protect clinics, SACCOs, and SMEs with audits, encryption, ODPC compliance, and ongoing staff training.",
    image: secureImg,
    features: [
      "Security audits",
      "Compliance & ODPC support",
      "Encrypted records",
      "Penetration testing",
      "Cybersecurity training",
    ],
    benefits: ["Stay compliant", "Prevent breaches", "Build customer trust"],
  },
];

const Solutions = () => {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Three products. One integrated platform."
        description="Each RiftNova product is best-in-class on its own — and exponentially more powerful when combined."
      />

      {products.map((p, i) => (
        <section key={p.id} id={p.id} className={`py-20 lg:py-28 ${i % 2 === 1 ? "bg-muted/40" : ""}`}>
          <div className="container-tight">
            <div className={`grid gap-12 lg:gap-16 lg:grid-cols-2 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 1 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-elevated border border-border">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-4">
                  <p.icon className="h-3.5 w-3.5" /> {p.name}
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-secondary leading-tight">
                  {p.tagline}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.description}</p>

                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-secondary">
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  {p.benefits.map((b) => (
                    <span key={b} className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary/5 border border-border text-secondary">
                      {b}
                    </span>
                  ))}
                </div>

                <Button asChild className="mt-8">
                  <Link to="/contact">
                    Request a {p.name} demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <FinalCTA />
    </>
  );
};

export default Solutions;
