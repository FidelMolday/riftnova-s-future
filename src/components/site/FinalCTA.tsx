import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const FinalCTA = ({
  title = "Partner With The Future of African Innovation",
  description = "Whether you're an investor, partner, or client — let's build the next generation of integrated platforms together.",
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-primary text-primary-foreground p-10 sm:p-16 text-center shadow-elevated"
        >
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
              {title}
            </h2>
            <p className="mt-4 text-primary-foreground/85 max-w-xl mx-auto">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
