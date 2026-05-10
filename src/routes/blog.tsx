import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionTitle, Reveal } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";
import { Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Swami Dev Hub" },
      { name: "description", content: "Expert essays on web design, SEO, UI/UX, freelancing and the latest digital trends." },
      { property: "og:title", content: "Insights — Swami Dev Hub" },
      { property: "og:description", content: "Ideas, frameworks and field notes from our studio." },
    ],
  }),
  component: Blog,
});

const cats = ["All", "Web Design", "SEO", "Business Growth", "UI/UX", "Freelancing", "Trends"];
const posts = [
  { t: "10 Principles of Premium Web Design in 2026", c: "Web Design", d: "Apr 12, 2026" },
  { t: "How We 3x'd Conversion for a Luxury E-commerce Brand", c: "Business Growth", d: "Mar 28, 2026" },
  { t: "The SEO Stack Every Modern Studio Should Use", c: "SEO", d: "Mar 15, 2026" },
  { t: "Designing Interfaces That Feel Expensive", c: "UI/UX", d: "Mar 02, 2026" },
  { t: "Freelancing in 2026: Pricing, Pitching, Positioning", c: "Freelancing", d: "Feb 18, 2026" },
  { t: "Web Trends Worth Your Attention This Year", c: "Trends", d: "Feb 04, 2026" },
];

function Blog() {
  const [q, setQ] = useState("");
  const [c, setC] = useState("All");
  const list = posts.filter(p => (c==="All"||p.c===c) && p.t.toLowerCase().includes(q.toLowerCase()));
  return (
    <SiteLayout>
      <section className="section">
        <div className="container-luxe">
          <SectionTitle eyebrow="Insights" title={<>Field notes from <span className="text-gold">the studio.</span></>}
            subtitle="Strategy, design and engineering ideas — written for ambitious founders and operators." center />

          <Reveal>
            <article className="mt-12 grid overflow-hidden rounded-3xl border border-gold/30 bg-card/40 md:grid-cols-2">
              <div className="aspect-video bg-gradient-to-br from-gold/40 via-amber-500/20 to-rose-500/20" />
              <div className="p-8 md:p-10">
                <p className="text-xs uppercase tracking-widest text-gold">Featured · Web Design</p>
                <h3 className="mt-3 font-display text-3xl md:text-4xl">10 Principles of Premium Web Design in 2026</h3>
                <p className="mt-4 text-sm text-muted-foreground">A practical guide to the design choices that separate forgettable websites from unforgettable brand experiences.</p>
                <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-ink">Read article</button>
              </div>
            </article>
          </Reveal>

          <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {cats.map(x => (
                <button key={x} onClick={()=>setC(x)}
                  className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest transition ${c===x?"border-gold bg-gold-gradient text-ink":"border-border text-muted-foreground hover:border-gold hover:text-gold"}`}>
                  {x}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2">
              <Search size={14} className="text-muted-foreground" />
              <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search articles" className="w-48 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.t} delay={i*0.04}>
                <article className="hover-lift group h-full overflow-hidden rounded-2xl border border-border bg-card/40">
                  <div className="aspect-[5/3] bg-gradient-to-br from-gold/30 via-card to-ink" />
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gold">{p.c}</span>
                      <span className="text-muted-foreground">{p.d}</span>
                    </div>
                    <h3 className="mt-3 font-display text-xl group-hover:text-gold transition">{p.t}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-2">
            {[1,2,3].map(n => (
              <button key={n} className={`grid h-10 w-10 place-items-center rounded-full border ${n===1?"border-gold bg-gold-gradient text-ink":"border-border text-muted-foreground"}`}>{n}</button>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </SiteLayout>
  );
}
