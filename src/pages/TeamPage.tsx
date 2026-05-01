import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Linkedin, Github } from "lucide-react";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";

const team = [
  {
    name: "DR. Lilian Sing'oei",
    role: "CEO & Co-founder",
    image: t1,
    bio: "Cybersecurity strategist with a decade in enterprise risk, compliance, and Africa-first product strategy.",
    expertise: ["Cybersecurity", "ODPC Compliance", "Strategy"],
    linkedin: "https://www.linkedin.com/in/lilian-sing-oei-08912654",
  },
  {
    name: "Diana Opiyo",
    role: "Co-founder & AI & Data Lead",
    image: t2,
    bio: "ML engineer focused on health diagnostics and crop intelligence models trained on African datasets.",
    expertise: ["Machine Learning", "HealthTech AI", "Computer Vision"],
    linkedin: "https://www.linkedin.com/in/diana-opiyo-680b98309",
  },
  {
    name: "Fidel Ouma",
    role: "Head of Engineering",
    image: t3,
    bio: "Full-stack engineer building secure, scalable infrastructure for low-bandwidth and high-trust environments.",
    expertise: ["Cloud Architecture", "DevSecOps", "APIs"],
    linkedin: "https://www.linkedin.com/in/fidel-ouma-699850291",
  },
  {
    name: "David Wambua",
    role: "Head of Operations",
    image: t4,
    bio: "Operations leader scaling clinic, SACCO, and farmer onboarding across the Rift Valley corridor.",
    expertise: ["Operations", "Partnerships", "Go-to-Market"],
    linkedin: "https://www.linkedin.com/in/david-polycarp-a76490292",
  },
];

const TeamPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people building Africa's integrated platform"
        description="A founding team combining African expertise with global engineering and security standards."
      />

      <section className="py-20 lg:py-28">
        <div className="container-tight">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="overflow-hidden h-full border-border hover:shadow-elevated hover:-translate-y-1 transition-all">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={m.image}
                      alt={m.name}
                      loading="lazy"
                      width={768}
                      height={768}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-secondary">{m.name}</h3>
                    <p className="text-sm text-primary font-medium">{m.role}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {m.expertise.map((e) => (
                        <span key={e} className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-muted text-secondary">
                          {e}
                        </span>
                      ))}
                    </div>
                     <div className="mt-5 pt-4 border-t border-border flex gap-3 text-muted-foreground">
                        <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-4 w-4" /></a>
                        <a href="#" aria-label="GitHub" className="hover:text-primary"><Github className="h-4 w-4" /></a>
                      </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA title="Want to build with us?" description="We're hiring across engineering, AI, and operations. Reach out — let's talk." />
    </>
  );
};

export default TeamPage;
