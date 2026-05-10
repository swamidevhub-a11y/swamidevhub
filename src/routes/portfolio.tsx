import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionTitle, Reveal } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";
import { useState } from "react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Swami Dev Hub" },
      { name: "description", content: "A selection of premium websites, e-commerce stores and landing pages we've designed and developed." },
      { property: "og:title", content: "Portfolio — Swami Dev Hub" },
      { property: "og:description", content: "Selected case studies from our studio." },
    ],
  }),
  component: Portfolio,
});

const cats = ["All", "E-commerce", "Business", "Portfolio", "Landing Pages", "Redesign"] as const;

const projects = [
  { t: "Aurum Jewels", c: "E-commerce", grad: "from-amber-500/40 to-rose-500/30" },
  { t: "Maison Atelier", c: "Business", grad: "from-yellow-500/40 to-emerald-500/30" },
  { t: "NorthRail Studio", c: "Portfolio", grad: "from-orange-400/40 to-fuchsia-500/30" },
  { t: "Lumière Hotel", c: "Landing Pages", grad: "from-amber-400/40 to-cyan-500/30" },
  { t: "Atlas Capital", c: "Business", grad: "from-yellow-600/40 to-blue-500/30" },
  { t: "Kintsugi Co.", c: "E-commerce", grad: "from-rose-400/40 to-amber-500/30" },
  { t: "Praxis Legal", c: "Redesign", grad: "from-yellow-400/40 to-zinc-500/30" },
  { t: "Velvet&Co", c: "E-commerce", grad: "from-fuchsia-500/40 to-amber-400/30" },
  { t: "Heritage Estates", c: "Business", grad: "from-amber-700/40 to-emerald-700/30" },
];

function Portfolio() {
  const [f, setF] = useState<typeof cats[number]>("All");
  const list = projects.filter(p => f === "All" || p.c === f);
  return (
    <SiteLayout>
      <section className="section">
        <div className="container-luxe">
          <SectionTitle eyebrow="Portfolio" title={<>Work that <span className="text-gold">speaks for itself.</span></>}
            subtitle="A curated showcase of brands we've helped build, scale and shine across industries." center />

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {cats.map(c => (
              <button key={c} onClick={() => setF(c)}
                className={`rounded-full border px-5 py-2 text-sm transition ${f===c?"border-gold bg-gold-gradient text-ink":"border-border text-muted-foreground hover:border-gold hover:text-gold"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.t} delay={i*0.04}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.grad} transition duration-700 group-hover:scale-110`} />
                  <div className="absolute inset-x-4 bottom-4 glass-card rounded-xl p-4">
                    <p className="text-[11px] uppercase tracking-widest text-gold">{p.c}</p>
                    <h3 className="mt-1 font-display text-2xl">{p.t}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </SiteLayout>
  );
}
