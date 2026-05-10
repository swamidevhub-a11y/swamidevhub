import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const v: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      variants={v}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ eyebrow, title, subtitle, center }: { eyebrow?: string; title: ReactNode; subtitle?: string; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-3 font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
