import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-mockup.jpg";

const slides = [
  { eyebrow: "Premium Web Studio", title: "Building Premium\nDigital Experiences", sub: "We craft high-performance websites that elevate brands and convert visitors into loyal customers." },
  { eyebrow: "Luxury · Performance", title: "Luxury Websites That\nGrow Businesses", sub: "From boutique storefronts to enterprise platforms — pixel-precise, blazing-fast, and built to scale." },
  { eyebrow: "Modern Solutions", title: "Modern Web Solutions\nFor Ambitious Brands", sub: "End-to-end design, development, SEO and support — engineered to make your brand unforgettable." },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background ornaments */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[1100px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
             style={{ background: "radial-gradient(closest-side, oklch(0.78 0.14 82 / 35%), transparent)" }} />
        <div className="absolute inset-0 opacity-[0.06]"
             style={{ backgroundImage: "linear-gradient(oklch(0.78 0.14 82) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.14 82) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      </div>

      <div className="container-luxe grid min-h-[92vh] items-center gap-16 py-24 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold">
                <Sparkles size={14} /> {slides[i].eyebrow}
              </div>
              <h1 className="mt-6 whitespace-pre-line font-display text-5xl leading-[0.98] md:text-6xl lg:text-7xl">
                {slides[i].title.split("\n").map((l, k) => (
                  <span key={k} className="block">
                    {k === 1 ? <span className="text-gold">{l}</span> : l}
                  </span>
                ))}
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">{slides[i].sub}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 font-semibold text-ink shadow-gold transition hover:scale-[1.03]">
              Get Free Consultation
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold text-foreground transition hover:border-gold hover:text-gold">
              View Portfolio
            </Link>
          </div>

          <div className="mt-10 flex gap-2">
            {slides.map((_, k) => (
              <button key={k} onClick={() => setI(k)} aria-label={`slide ${k}`}
                className={`h-1.5 rounded-full transition-all ${i === k ? "w-10 bg-gold-gradient" : "w-5 bg-border"}`} />
            ))}
          </div>
        </div>

        {/* Floating mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-10 -z-10 rounded-[40px] opacity-40 blur-3xl" style={{ background: "var(--gradient-gold)" }} />
          <div className="glass-card relative overflow-hidden rounded-[28px] p-2 shadow-luxe animate-float">
            <div className="flex items-center gap-1.5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-gold" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
              <span className="ml-3 text-xs text-muted-foreground">swamidevhub.com</span>
            </div>
            <div className="aspect-[4/3] rounded-2xl border border-border bg-gradient-to-br from-card to-ink p-6">
              <div className="flex items-center justify-between">
                <div className="h-2 w-20 rounded bg-gold/60" />
                <div className="flex gap-1">
                  <span className="h-2 w-10 rounded bg-muted" />
                  <span className="h-2 w-10 rounded bg-muted" />
                  <span className="h-2 w-10 rounded bg-muted" />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="col-span-2 h-32 rounded-xl bg-gradient-to-br from-gold/30 to-transparent" />
                <div className="space-y-3">
                  <div className="h-14 rounded-xl bg-card" />
                  <div className="h-14 rounded-xl bg-card" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[0,1,2].map(k => <div key={k} className="h-20 rounded-xl border border-border bg-card/60" />)}
              </div>
            </div>
          </div>
          <motion.div
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}
            className="glass-card absolute -bottom-6 -left-8 rounded-2xl p-4 shadow-luxe"
          >
            <p className="text-xs uppercase tracking-widest text-gold">Performance</p>
            <p className="mt-1 font-display text-3xl">99<span className="text-gold">/100</span></p>
            <p className="text-xs text-muted-foreground">Lighthouse Score</p>
          </motion.div>
          <motion.div
            initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}
            className="glass-card absolute -top-6 -right-6 rounded-2xl p-4 shadow-luxe"
          >
            <p className="text-xs uppercase tracking-widest text-gold">Conversion</p>
            <p className="mt-1 font-display text-3xl">+182%</p>
            <p className="text-xs text-muted-foreground">Avg. uplift</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
