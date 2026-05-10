import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="section">
      <div className="container-luxe">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-ink p-12 text-center shadow-luxe md:p-20">
            <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "var(--gradient-radial)" }} />
            <div className="absolute -inset-x-20 -bottom-20 -z-10 h-60 opacity-30 blur-3xl" style={{ background: "var(--gradient-gold)" }} />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Let's build</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              Ready to build your <span className="text-gold">premium</span><br/>digital presence?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Tell us about your project — get a free strategy call within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 font-semibold text-ink shadow-gold transition hover:scale-[1.03]">
                Start Your Project <ArrowRight size={18} className="transition group-hover:translate-x-1"/>
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold transition hover:border-gold hover:text-gold">
                Contact Us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
