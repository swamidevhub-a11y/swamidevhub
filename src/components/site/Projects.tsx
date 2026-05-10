import { Reveal, SectionTitle } from "./Reveal";

const projects = [
  { t: "Aurum Jewels", c: "E-commerce", grad: "from-amber-500/30 to-rose-500/20" },
  { t: "Maison Atelier", c: "Business Website", grad: "from-yellow-500/30 to-emerald-500/20" },
  { t: "NorthRail Studio", c: "Portfolio", grad: "from-orange-400/30 to-fuchsia-500/20" },
  { t: "Lumière Hotel", c: "Landing Page", grad: "from-amber-400/30 to-cyan-500/20" },
  { t: "Atlas Capital", c: "Business Website", grad: "from-yellow-600/30 to-blue-500/20" },
  { t: "Kintsugi Co.", c: "E-commerce", grad: "from-rose-400/30 to-amber-500/20" },
];

export function Projects() {
  return (
    <section className="section">
      <div className="container-luxe">
        <SectionTitle eyebrow="Featured Work" title={<>Selected <span className="text-gold">case studies.</span></>} subtitle="A glimpse into the brands we've helped build, scale and shine." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.grad}`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(1_0_0/15%),transparent_60%)]" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="glass-card w-3/4 rounded-xl p-4 transition duration-500 group-hover:scale-110">
                    <div className="h-2 w-12 rounded bg-gold/70" />
                    <div className="mt-2 h-2 w-20 rounded bg-muted" />
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-10 rounded bg-card" />
                      <div className="h-10 rounded bg-card" />
                      <div className="h-10 rounded bg-card" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink via-ink/80 to-transparent p-6 opacity-95 transition duration-500 group-hover:translate-y-0">
                  <p className="text-xs uppercase tracking-widest text-gold">{p.c}</p>
                  <h3 className="mt-1 font-display text-2xl">{p.t}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
