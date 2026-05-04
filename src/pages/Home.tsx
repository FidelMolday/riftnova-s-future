import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Counter } from "@/components/site/Counter";
import {
  ArrowRight,
  Stethoscope,
  Sprout,
  ShieldCheck,
  HeartPulse,
  Wheat,
  Lock,
  Layers,
  Building2,
  Hospital,
  Landmark,
  Users,
  Briefcase,
  Quote,
} from "lucide-react";
import heroImage from "@/assets/hero-platform.jpg";
import healthImg from "@/assets/sector-health.jpg";
import farmImg from "@/assets/sector-farm.jpg";
import secureImg from "@/assets/sector-secure.jpg";

const problems = [
  {
    icon: Lock,
    title: "Cybersecurity Risk",
    text: "Kenya's healthcare sector has little to no data security infrastructure — patient records, insurance data, and hospital systems are dangerously exposed.",
  },
  {
    icon: Wheat,
    title: "Farmer Vulnerability",
    text: "Smallholder farmers are rapidly going digital but lack protection from mobile fraud, data theft, and platform manipulation.",
  },
  {
    icon: HeartPulse,
    title: "Fragmented Solutions",
    text: "Existing cybersecurity tools are expensive, foreign-built, and not adapted to African infrastructure or languages.",
  },
];

const solutions = [
  {
    icon: ShieldCheck,
    name: "RiftShield",
    image: secureImg,
    points: ["Cybersecurity-as-a-Service", "For SMEs, hospitals, agri-platforms", "East Africa focus", "Compliance & ODPC support"],
  },
  {
    icon: Stethoscope,
    name: "RiftHealth",
    image: healthImg,
    points: ["Secure electronic health records", "End-to-end encryption", "For clinics and hospitals", "Telemedicine ready"],
  },
  {
    icon: Sprout,
    name: "RiftFarm",
    image: farmImg,
    points: ["Secure digital marketplace", "Data platform for farmers", "Market connections", "Financial resources"],
  },
];

const trusted = [
  { icon: Landmark, label: "SACCOs" },
  { icon: Hospital, label: "Clinics" },
  { icon: Sprout, label: "Agribusinesses" },
  { icon: Briefcase, label: "SMEs" },
  { icon: Users, label: "Investors" },
  { icon: Building2, label: "County Partners" },
];

const whyRiftNova = [
  "Founded by a Kenyan woman with BSc IT (JKUAT), MSc Computer Science (China), and MSc Cybersecurity (USA)",
  "Deep understanding of both African infrastructure realities and global security standards",
  "Built from lived experience — not from a boardroom in Silicon Valley",
  "Targeting a combined addressable market of $3B+ across East African health tech and agri-tech sectors",
];

const stats = [
  { value: 14, prefix: "$", suffix: "B", label: "Kenya ICT Market" },
  { value: 11, prefix: "$", suffix: "B", label: "Africa HealthTech" },
  { value: 1.56, prefix: "$", suffix: "B", decimals: 2, label: "AgriTech Market" },
  { value: 500, suffix: "K+", label: "Underserved in Eldoret" },
];

const testimonials = [
  {
    quote: "RiftFarm helped me predict crop disease before it spread. My yields are up and my income is steady.",
    name: "Joseph K.",
    role: "Smallholder Farmer, Uasin Gishu",
  },
  {
    quote: "RiftHealth cut our patient registration time in half and made records accessible across our clinics.",
    name: "Dr. Achieng O.",
    role: "Clinic Manager, Eldoret",
  },
  {
    quote: "RiftSecure brought our SACCO fully into ODPC compliance. The training transformed our staff culture.",
    name: "Peter M.",
    role: "SACCO Executive",
  },
  {
    quote: "An ambitious team solving real problems with deep local context. A category-defining platform.",
    name: "Linda W.",
    role: "Investor Partner",
  },
];

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none" aria-hidden />
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" aria-hidden />
        <div className="absolute top-40 right-0 h-72 w-72 rounded-full bg-primary-glow/20 blur-3xl pointer-events-none" aria-hidden />
        <div className="container-tight relative pt-16 pb-16 lg:pt-24 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/60 px-3 py-1 text-xs font-medium text-accent-foreground mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                HealthTech · AgriTech · Cybersecurity
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-secondary">
                One Platform.<br />
                Three <span className="text-gradient">Superpowers.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                RiftNova Technologies is a Kenyan-born, globally-minded technology company building a unified platform that secures healthcare data, empowers smallholder farmers, and delivers cutting-edge cybersecurity — all in one ecosystem. Africa loses billions annually to cyberattacks, health data breaches, and agricultural fraud. Yet the tools to fight back have always been fragmented, expensive, and built for Western markets. RiftNova changes that. We build for Africa, by Africans — with world-class security at the core of everything we do.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Partner With Us</Link>
                </Button>
              </div>
              <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
                <div>
                  <div className="font-semibold text-secondary">Eldoret, Kenya</div>
                  <div>HQ Africa</div>
                </div>
                <div className="h-8 w-px bg-border" />
                <div>
                  <div className="font-semibold text-secondary">Grand Rapids, MI</div>
                  <div>HQ North America</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-primary opacity-15 blur-3xl rounded-3xl" aria-hidden />
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-border bg-card">
                <img src={heroImage} alt="RiftNova platform dashboard" width={1280} height={960} className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="py-20 lg:py-24 bg-muted/40">
        <div className="container-tight">
          <SectionHeading
            eyebrow="The Challenge"
            title="Africa's biggest sectors face urgent, intersecting problems"
            description="Cybersecurity gaps, farmer vulnerabilities, and fragmented tools — we solve them all in one platform."
          />
          <div className="mt-14 grid gap-6 place-items-center grid-cols-1 sm:grid-cols-3 max-w-5xl mx-auto">
            {problems.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
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

      {/* SOLUTIONS */}
      <section className="py-20 lg:py-28">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Our Solutions"
            title="Three integrated products. One unified platform."
            description="Each product solves a critical problem — together they create compounding impact."
          />
          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to="/solutions" className="group block h-full">
                  <Card className="overflow-hidden h-full border-border hover:shadow-elevated hover:-translate-y-1 transition-all">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.name}
                        loading="lazy"
                        width={1024}
                        height={768}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-7">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-md bg-primary/10 text-primary inline-flex items-center justify-center">
                          <s.icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-display text-xl font-bold text-secondary">{s.name}</h3>
                      </div>
                      <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                        {s.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                      <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all gap-1">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY RIFTNOVA */}
      <section className="py-20 lg:py-24 bg-muted/40">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Why RiftNova"
            title="Built from lived experience, for global impact"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {whyRiftNova.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Card className="p-7 h-full border-border hover:border-primary/40 hover:shadow-card transition-all">
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-16 border-y border-border bg-muted/30">
        <div className="container-tight">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Trusted across Africa's most important sectors
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {trusted.map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-2 text-secondary/70 hover:text-primary transition-colors">
                <t.icon className="h-7 w-7" />
                <span className="text-sm font-medium">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 lg:py-24 bg-gradient-navy text-secondary-foreground">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              Market Opportunity
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              A multi-billion dollar opportunity, unified
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="font-display text-4xl lg:text-5xl font-bold text-primary">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <p className="mt-2 text-sm text-secondary-foreground/75">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Voices"
            title="What partners and clients say"
            description="Real impact from clinics, farms, SACCOs, and investors building with RiftNova."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="p-7 h-full border-border hover:shadow-card transition-all">
                  <Quote className="h-7 w-7 text-primary/40" />
                  <p className="mt-3 text-secondary leading-relaxed">"{t.quote}"</p>
                  <div className="mt-5 pt-5 border-t border-border">
                    <p className="font-semibold text-secondary text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
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

export default Home;
