import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-primary text-primary-foreground p-10 sm:p-16 text-center shadow-elevated"
        >
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" aria-hidden />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" aria-hidden />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
              Partner With The Future of African Innovation
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
              Whether you're an investor, partner, or client — let's build the next generation of integrated platforms together.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:hello@riftnova.com">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                <a href="mailto:hello@riftnova.com">Request Demo</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
