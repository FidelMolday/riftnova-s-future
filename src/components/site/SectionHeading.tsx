import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export const SectionHeading = ({ eyebrow, title, description, align = "center" }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">{eyebrow}</div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
};
