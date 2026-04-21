import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const PageHero = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-soft border-b border-border">
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" aria-hidden />
      <div className="container-tight relative py-20 lg:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow && (
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4">
              {eyebrow}
            </span>
          )}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary leading-[1.05]">
            {title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
