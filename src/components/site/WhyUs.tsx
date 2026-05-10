import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal, SectionTitle } from "./Reveal";
import { Zap, Crown, Search, Smartphone, Tag, HeadphonesIcon } from "lucide-react";

const reasons = [
  { Icon: Zap, t: "Fast Delivery", d: "Tight timelines without compromising on quality." },
  { Icon: Crown, t: "Premium Design", d: "Luxury aesthetics rooted in proven UX principles." },
  { Icon: Search, t: "SEO Optimized", d: "Built to rank with semantic structure and speed." },
  { Icon: Smartphone, t: "Fully Responsive", d: "Pixel-perfect on every device and breakpoint." },
  { Icon: Tag, t: "Affordable Pricing", d: "Studio-quality work at freelance economics." },
  { Icon: HeadphonesIcon, t: "Dedicated Support", d: "Direct access to your developer, always." },
];

const stats = [
  { n: 100, suf: "+", l: "Projects Delivered" },
  { n: 50, suf: "+", l: "Happy Clients" },
  { n: 5, suf: "+", l: "Years Experience" },
  { n: 24, suf: "/7", l: "Support Available" },
];

function Counter({ to, suf }: { to: number; suf: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suf}</span>;
}

export function WhyUs() {
  return (
    <section className="section relative">
      <div className="container-luxe">
        <SectionTitle eyebrow="Why Choose Us" title={<>Crafted with <span className="text-gold">obsession.</span></>} />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.t} delay={i * 0.05}>
              <div className="hover-lift flex h-full items-start gap-4 rounded-2xl border border-border bg-card/40 p-6">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gold-gradient text-ink"><r.Icon size={18}/></div>
                <div>
                  <h3 className="font-display text-xl">{r.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl border border-gold/20 bg-ink/60 p-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <p className="font-display text-5xl text-gold"><Counter to={s.n} suf={s.suf} /></p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
