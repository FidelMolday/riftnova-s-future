import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Card } from "@/components/ui/card";
import { DollarSign, PieChart, Award, Users, Zap, Lightbulb, ExternalLink } from "lucide-react";

const fundingAsk = "Seed Round: $250,000 — $500,000";

const useOfFunds = [
  { percent: "40%", detail: "Product development (RiftHealth MVP + RiftFarm Beta)" },
  { percent: "25%", detail: "Team hiring (2 developers, 1 sales lead in Kenya)" },
  { percent: "20%", detail: "Market entry and customer acquisition" },
  { percent: "15%", detail: "Legal, compliance, and infrastructure" },
];

const grants = [
  {
    name: "Google for Startups — Africa",
    detail: "Up to $100K + cloud credits for African tech startups",
    url: "https://goo.gl/startups",
  },
  {
    name: "Tony Elumelu Foundation",
    detail: "$5,000 seed + mentorship for African entrepreneurs",
    url: "https://tefconnect.com",
  },
  {
    name: "USAID Development Innovation Ventures",
    detail: "Grants for innovations solving development challenges in health and agriculture",
    url: "https://www.usaid.gov/div",
  },
  {
    name: "Gates Foundation Grand Challenges",
    detail: "Funding for health and agriculture innovations in developing countries",
    url: "https://gcgh.grandchallenges.org",
  },
  {
    name: "Mastercard Foundation",
    detail: "Supports African entrepreneurs building economic inclusion",
    url: "https://mastercardfdn.org",
  },
  {
    name: "World Bank infoDev",
    detail: "Supports tech startups in developing countries — agri and health focus",
    url: "https://www.worldbank.org/infodev",
  },
];

const angelNetworks = [
  "Viktoria Business Angel Network (Kenya)",
  "Chandaria Capital (Kenya)",
  "Nairobi Business Angels",
  "African Business Angel Network (ABAN)",
  "AngelList Africa",
];

const accelerators = [
  "Y Combinator (apply — they fund African startups now)",
  "Antler East Africa (Nairobi-based, pre-seed)",
  "Villgro Africa (health innovation focus)",
  "GrowthAfrica Accelerator",
  "Founders Factory Africa",
];

const pitchTips = [
  "Lead with the problem size — Africa's cybersecurity losses, health data breaches, farmer fraud",
  "Highlight your unique founder profile — triple-qualified, lived experience, diaspora advantage",
  "Show traction early — even 3 pilot clients is powerful at seed stage",
  "Emphasize the platform play — three products, one ecosystem = strong retention and moat",
  "Always tie back to SDGs — investors love health (SDG3) + food security (SDG2) + digital inclusion (SDG9)",
];

const InvestorsPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="Funding & Growth Opportunities"
        description="Join us as we build Africa's next-generation integrated platform — solving real problems with scalable technology."
      />

      <section className="py-20 lg:py-24">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Funding Ask"
            title="Seed round now open"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mt-14"
          >
            <Card className="p-10 border-border text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="font-display text-3xl font-bold text-secondary">{fundingAsk}</h3>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                We're raising a seed round to scale our integrated platform across healthcare, agriculture, and cybersecurity sectors.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-muted/40">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Use of Funds"
            title="How we'll deploy capital"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useOfFunds.map((item, i) => (
              <motion.div
                key={item.percent}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Card className="p-7 h-full border-border hover:border-primary/40 hover:shadow-card transition-all text-center">
                  <div className="h-11 w-11 rounded-md bg-primary/10 text-primary inline-flex items-center justify-center mb-5">
                    <PieChart className="h-5 w-5" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-primary">{item.percent}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Grant Opportunities"
            title="Non-dilutive funding sources"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {grants.map((g, i) => (
              <motion.div
                key={g.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Card className="p-7 h-full border-border hover:border-primary/40 hover:shadow-card transition-all">
                  <div className="h-11 w-11 rounded-md bg-primary/10 text-primary inline-flex items-center justify-center mb-5">
                    <Award className="h-5 w-5" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-secondary">{g.name}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.detail}</p>
                  <a
                    href={g.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    Learn more <ExternalLink className="h-3 w-3" />
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-muted/40">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Angel Networks"
            title="Kenya & Africa angel communities"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {angelNetworks.map((network, i) => (
              <motion.div
                key={network}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Card className="p-5 border-border hover:border-primary/40 hover:shadow-card transition-all">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-md bg-primary/10 text-primary inline-flex items-center justify-center shrink-0">
                      <Users className="h-4 w-4" />
                    </div>
                    <span className="text-sm text-secondary font-medium">{network}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Accelerators"
            title="Growth programs we're targeting"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {accelerators.map((acc, i) => (
              <motion.div
                key={acc}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Card className="p-5 border-border hover:border-primary/40 hover:shadow-card transition-all">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-md bg-primary/10 text-primary inline-flex items-center justify-center shrink-0">
                      <Zap className="h-4 w-4" />
                    </div>
                    <span className="text-sm text-secondary font-medium">{acc}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-muted/40">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Pitch Tips"
            title="How to position RiftNova to investors"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {pitchTips.map((tip, i) => (
              <motion.div
                key={tip}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Card className="p-7 h-full border-border hover:border-primary/40 hover:shadow-card transition-all">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-md bg-primary/10 text-primary inline-flex items-center justify-center shrink-0 mt-1">
                      <Lightbulb className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Ready to Invest in Africa's Future?"
        description="Join us as we build the infrastructure that will power the next decade of African innovation."
        buttonText="Get in Touch"
      />
    </>
  );
};

export default InvestorsPage;
