import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 14, prefix: "$", suffix: "B", label: "Kenya ICT Market" },
  { value: 11, prefix: "$", suffix: "B", label: "Africa HealthTech" },
  { value: 1.56, prefix: "$", suffix: "B", label: "AgriTech Market" },
  { value: 500, prefix: "", suffix: "K+", label: "Underserved in Eldoret" },
];

const Counter = ({ to, decimals = 0 }: { to: number; decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
      return () => controls.stop();
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const Stats = () => {
  return (
    <section id="market" className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-primary-glow blur-3xl" />
      </div>
      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="text-xs font-semibold tracking-widest uppercase text-primary-glow mb-3">Market Opportunity</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            A multi-billion dollar opportunity, ready to be unified.
          </h2>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-5xl lg:text-6xl font-bold tracking-tight">
                {s.prefix}
                <Counter to={s.value} decimals={s.value % 1 !== 0 ? 2 : 0} />
                {s.suffix}
              </div>
              <div className="mt-2 text-sm text-secondary-foreground/70">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
