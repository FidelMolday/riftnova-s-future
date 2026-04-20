import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 grid-pattern pointer-events-none" aria-hidden />
      <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute top-40 right-0 h-72 w-72 rounded-full bg-primary-glow/20 blur-3xl pointer-events-none" aria-hidden />

      <div className="container-tight relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/50 px-3 py-1 text-xs font-medium text-accent-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              HealthTech · AgriTech · Cybersecurity
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              One Platform.<br />
              Three <span className="text-gradient">Superpowers.</span><br />
              Infinite Impact.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              RiftNova combines AI healthcare solutions, smart agriculture systems, and enterprise cybersecurity into one integrated platform — built for Africa and scalable globally.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">
                  <PlayCircle className="mr-2 h-4 w-4" /> Book a Demo
                </a>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div>
                <div className="font-semibold text-foreground">Eldoret, Kenya</div>
                <div>HQ Africa</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="font-semibold text-foreground">Grand Rapids, MI</div>
                <div>HQ North America</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" aria-hidden />
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-border bg-card animate-float">
              <img
                src={heroImage}
                alt="RiftNova integrated platform dashboard preview"
                width={1280}
                height={1024}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
